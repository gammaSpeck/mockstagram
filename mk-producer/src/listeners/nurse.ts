import { nanoid } from 'nanoid'
import { Message } from 'node-nats-streaming'
import { Listener, NurseUpdatedRedisEvent, Subjects } from '../../common/events'
import { redisWrapper } from '../../common/libs'
import { SERVER_NAME, setServerNumber } from '../local-cache'

export class NurseUpdatedRedisListener extends Listener<NurseUpdatedRedisEvent> {
  subject: Subjects.NurseUpdatedRedis = Subjects.NurseUpdatedRedis
  queueGroupName = nanoid() // The reason we specify this is because we want ALL the replicas to receive this event

  async onMessage(data: NurseUpdatedRedisEvent['data'], msg: Message) {
    try {
      console.log(`Server ${SERVER_NAME} received event. Updating local cache...`)
      const redis = redisWrapper.client
      const newServerNumber = Number(await redis.hget('mockstagram', SERVER_NAME))
      if (!newServerNumber) throw Error(`Server: ${SERVER_NAME} has no number assigned`)

      setServerNumber(newServerNumber)

      msg.ack()
    } catch (e) {
      console.error('Error caught in NurseUpdatedRedisListener:::::', e)
    }
  }
}
