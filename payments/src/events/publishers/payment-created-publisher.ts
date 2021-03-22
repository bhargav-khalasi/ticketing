import { PaymentCreatedEvent, Publisher, Subjects } from '@bkticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
