import { Publisher, Subjects, TicketCreatedEvent } from '@bkticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
