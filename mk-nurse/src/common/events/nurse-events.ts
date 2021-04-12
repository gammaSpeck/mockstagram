import { Subjects } from './subjects'

export interface NurseUpdatedRedisEvent {
  subject: Subjects.NurseUpdatedRedis
  data: {
    deadServerName: string
  }
}
