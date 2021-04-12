import { NurseUpdatedRedisEvent, Publisher, Subjects } from '../common/events'

export class NurseUpdatedRedisPublisher extends Publisher<NurseUpdatedRedisEvent> {
  readonly subject: Subjects.NurseUpdatedRedis = Subjects.NurseUpdatedRedis
}
