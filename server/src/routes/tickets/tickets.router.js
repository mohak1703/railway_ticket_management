const express = require('express');
const { httpAddNewTicket, httpGetTicketsWithEmail, httpDeleteTicketWithPNR } = require('./tickets.controller.js');

const ticketsRouter = express.Router();

ticketsRouter.post('/', httpAddNewTicket);
ticketsRouter.get('/:user_email', httpGetTicketsWithEmail);
ticketsRouter.delete('/:pnr', httpDeleteTicketWithPNR );

module.exports = ticketsRouter;