import { Message } from 'node-nats-streaming'
import { ProducerStoppedEvent, Listener, Subjects, ProducerStartedEvent } from '../common/events'
import { redisWrapper } from '../common/libs'
import { QUEUE_GROUP_NAME } from './queue-group-name'

export class ProducerStoppedListener extends Listener<ProducerStoppedEvent> {
  subject: Subjects.ProducerStopped = Subjects.ProducerStopped
  queueGroupName = QUEUE_GROUP_NAME

  async onMessage(data: ProducerStoppedEvent['data'], msg: Message) {
    console.log('A MK Producer has died, RIP 💀', data)
    const redis = redisWrapper.client // Make sure connect was called before this

    const oldTotal = Number(await redis.get('mockstagram:TOTAL'))
    console.log('Current total', oldTotal)

    const deadServerNumber = await redis.hget('mockstagram', data.serverName)
    console.log('deadServerNumber', deadServerNumber)

    // Delete Key & reassign total on redis
    await redis.hdel('mockstagram', data.serverName)
    console.log('Old Server entry has been deleted')
    await redis.set('mockstagram:TOTAL', oldTotal - 1) // Update total
    console.log('Total has been updated')

    // Reassign Server positions on redis
    const updatedMap = await redis.hgetall('mockstagram')
    console.log('updatedMap', updatedMap)
    const arr = Object.entries(updatedMap)
    console.log(arr)
    if (arr.length <= 1) {
      console.log('None or only one server remains. No need to reassign redis map')
      msg.ack()
      return
    }

    // Find the last server name and number
    let lastServerName = arr[0][0]
    let lastServerNum = Number(arr[0][1])

    for (let [k, v] of arr) {
      if (Number(v) > lastServerNum) {
        lastServerName = k
        lastServerNum = Number(v)
      }
    }
    console.log('Computed lastServerName, lastServerNum', lastServerName, lastServerNum)

    if (lastServerNum === arr.length) {
      console.log('This is the last server, no need to perform a producer server number reassign')
      msg.ack()
      return
    }
    // Reassign Server positions on redis
    await redis.hset('mockstagram', lastServerName, Number(deadServerNumber))

    const finalRedisMapState = await redis.hgetall('mockstagram')
    const finalTotal = Number(await redis.get('mockstagram:TOTAL'))
    console.log('-----------------------------------------------------------')
    console.log('Latest Redis Map State', finalRedisMapState)
    console.log('Latest Total', finalTotal)
    console.log('-----------------------------------------------------------\n')

    msg.ack()
  }
}

export class ProducerStartedListener extends Listener<ProducerStartedEvent> {
  subject: Subjects.ProducerStarted = Subjects.ProducerStarted
  queueGroupName = QUEUE_GROUP_NAME

  async onMessage(data: ProducerStartedEvent['data'], msg: Message) {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
    console.log(`MK Producer: ${data.serverName} hsa been started`)
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n')

    msg.ack()
  }
}
