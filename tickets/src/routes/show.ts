import { NotFoundError } from '@bkticketing/common';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const ticketId = req.params.id;
  if (!mongoose.isValidObjectId(ticketId)) {
    throw new NotFoundError();
  }

  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
