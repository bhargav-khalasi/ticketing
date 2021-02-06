import { OrderCancelledEvent, Publisher, Subjects } from '@bkticketing/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
