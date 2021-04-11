import { natsWrapper, redisWrapper } from '../common/libs'
import { ProducerStartedPublisher, ProducerStoppedPublisher } from './publishers/producer'
import { nanoid } from 'nanoid'

/** Server name is assigned at time of server creation */
const SERVER_NAME = nanoid()

const start = async () => {
  if (!process.env.NATS_CLIENT_ID) throw new Error('NATS_CLIENT_ID must be defined')
  if (!process.env.NATS_URL) throw new Error('NATS_URL must be defined')
  if (!process.env.NATS_CLUSTER_ID) throw new Error('NATS_CLUSTER_ID must be defined')
  if (!process.env.REDIS_HOST) throw new Error('REDIS_HOST must be defined')

  try {
    // Connect to NATS
    await natsWrapper.connect(
      process.env.NATS_CLUSTER_ID,
      process.env.NATS_CLIENT_ID,
      process.env.NATS_URL
    )
    natsWrapper.client.on('close', () => {
      console.log('NATS connection closed!')
    })
    // Connect to REDIS
    await redisWrapper.connect(6379, process.env.REDIS_HOST)

    // Setup Server
    const redis = redisWrapper.client
    const nats = natsWrapper.client

    const existingMap = await redis.hgetall('mockstagram')
    const total = Number(await redis.get('mockstagram:TOTAL')) || 0

    // Initial server setup
    if (!total) {
      // Register new 1st server onto redis
      await redis.hset('mockstagram', SERVER_NAME, 1)
      // Update total=1 for first server on redis
      await redis.set('mockstagram:TOTAL', 1)
      console.log('First server registered, and total num of servers: 1')
    } else {
      console.log('I am not the first server. Existing servers:', existingMap)
      const newTotal = total + 1
      // Register new server onto redis
      await redis.hset('mockstagram', SERVER_NAME, newTotal)
      // Update total num of servers on redis
      await redis.set('mockstagram:TOTAL', newTotal)
    }

    const finalRedisMapState = await redis.hgetall('mockstagram')
    const updatedTotal = await redis.get('mockstagram:TOTAL')
    console.log('-----------------------------------------------------------')
    console.log('Latest Redis Map State', finalRedisMapState)
    console.log('Latest Total: ', updatedTotal)
    console.log('-----------------------------------------------------------\n')

    // Announce birth 😄
    new ProducerStartedPublisher(nats).publish({ serverName: SERVER_NAME })

    // Announce Death 💀
    process.on('SIGINT', () => {
      new ProducerStoppedPublisher(nats).publish({ serverName: SERVER_NAME })
    })
    process.on('SIGTERM', () => {
      new ProducerStoppedPublisher(nats).publish({ serverName: SERVER_NAME })
    })
  } catch (e) {
    console.error(e)
    natsWrapper.client.close()
    redisWrapper.client.disconnect()
    process.exit()
  }
}

start()
