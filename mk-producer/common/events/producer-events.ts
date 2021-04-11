import { Subjects } from './subjects'

export interface ProducerStartedEvent {
  subject: Subjects.ProducerStarted
  data: {
    serverName: string
  }
}

export interface ProducerStoppedEvent {
  subject: Subjects.ProducerStopped
  data: {
    serverName: string
  }
}
