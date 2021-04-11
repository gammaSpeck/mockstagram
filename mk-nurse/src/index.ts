import { natsWrapper } from './common/libs'
import { redisWrapper } from './common/libs'
import { ProducerStoppedListener, ProducerStartedListener } from './listeners/producer'

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
    // Connect to redis
    await redisWrapper.connect(6379, process.env.REDIS_HOST!)

    // Listen to whenever a producer stops
    new ProducerStartedListener(natsWrapper.client).listen()
    new ProducerStoppedListener(natsWrapper.client).listen()
    console.log('MK Nurse is listening for any Server births and deaths!')
  } catch (e) {
    console.error(e)
    natsWrapper.client.close()
    redisWrapper.client.disconnect()
    process.exit()
  }
}

start()
