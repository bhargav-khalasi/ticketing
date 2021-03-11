import request from 'supertest';
import { app } from '../../app';
import mongoose from 'mongoose';
import { OrderStatus } from '@bkticketing/common';
import { Order } from '../../models/order';

it('returns a 404 when purchasing an order does not exist', async () => {
  await request(app)
    .post('/api/payments')
    .set('Cookie', global.signup())
    .send({
      token: 'sfsfsfsf',
      orderId: mongoose.Types.ObjectId().toHexString()
    })
    .expect(404);
});

it('return a 401 when an order does not belong to the user', async () => {
  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    userId: mongoose.Types.ObjectId().toHexString(),
    version: 0,
    price: 20,
    status: OrderStatus.Created
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.signup())
    .send({
      token: 'sfsfsfsf',
      orderId: order.id
    })
    .expect(401);
});

it('return a 400 when purchasing a cancelled order', async () => {
  const userId = mongoose.Types.ObjectId().toHexString();

  const order = Order.build({
    id: mongoose.Types.ObjectId().toHexString(),
    userId,
    version: 0,
    price: 20,
    status: OrderStatus.Cancelled
  });

  await order.save();

  await request(app)
    .post('/api/payments')
    .set('Cookie', global.signup(userId))
    .send({
      token: 'sfsfsfsf',
      orderId: order.id
    })
    .expect(400);
});
