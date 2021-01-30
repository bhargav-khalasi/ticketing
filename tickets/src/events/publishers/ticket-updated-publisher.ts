import { Publisher, Subjects, TicketUpdatedEvent } from '@bkticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
