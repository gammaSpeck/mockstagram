import { Stan } from 'node-nats-streaming'

import { Subjects } from './subjects'

interface Event {
  subject: Subjects
  data: any
}

export abstract class Publisher<T extends Event> {
  /**
   * The actual event subject/channel name to publish to
   */
  abstract subject: T['subject']
  protected client: Stan

  constructor(client: Stan) {
    this.client = client
  }

  /**
   * This function publishes a message to the
   * subject/channel which was earlier defined
   */
  publish(data: T['data']): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err, data) => {
        if (err) return reject(err)
        console.log('Event published to subject:', this.subject)
        resolve()
      })
    })
  }
}
