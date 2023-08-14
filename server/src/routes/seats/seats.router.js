const express = require('express');
const { httpGetTotalSeatsWithTrainNumber } = require('./seats.controller.js');

const seatsRouter = express.Router();

seatsRouter.get('/:train_number', httpGetTotalSeatsWithTrainNumber);

module.exports = seatsRouter;