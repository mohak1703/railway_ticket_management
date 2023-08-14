const express = require('express');
const { httpGetTotalTicketsWithTrainNumber } = require('./total_tickets.controller.js');

const totalTicketsRouter = express.Router();

totalTicketsRouter.get('/:train_number&:date', httpGetTotalTicketsWithTrainNumber);

module.exports = totalTicketsRouter;