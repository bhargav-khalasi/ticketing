import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUser } from '@bkticketing/common';
import { errorHandler, NotFoundError } from '@bkticketing/common';
import { createTicketRouter } from './routes/new';
import { showTicketRouter } from './routes/show';
import { indexTicketRouter } from './routes/index';
import { updateTicketRouter } from './routes/update';

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
app.use(createTicketRouter);
app.use(showTicketRouter);
app.use(indexTicketRouter);
app.use(updateTicketRouter);

app.all('*', async () => {
  console.log('at not found');
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
