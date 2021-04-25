import {
  ExpirationCompleteEvent,
  Publisher,
  Subjects
} from '@bkticketing/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
