import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler, NotFoundError, currentUser } from '@bkticketing/common';
import { createPaymentRouter } from './routes/new';

const app = express();
app.set('true proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false
    //secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser);
app.use(createPaymentRouter);

app.all('*', async () => {
  console.log('at not found');
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
