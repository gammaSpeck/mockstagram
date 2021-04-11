import { ProducerStartedEvent, ProducerStoppedEvent, Publisher, Subjects } from "../../common/events";

export class ProducerStartedPublisher extends Publisher<ProducerStartedEvent> {
  readonly subject: Subjects.ProducerStarted = Subjects.ProducerStarted
}

export class ProducerStoppedPublisher extends Publisher<ProducerStoppedEvent> {
  readonly subject: Subjects.ProducerStopped = Subjects.ProducerStopped
}
