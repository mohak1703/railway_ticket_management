const express = require('express');
const { httpAddNewTrain, httpGetTrainWithTrainNumber } = require('./trains.controller.js');

const trainsRouter = express.Router();

trainsRouter.get('/:train_number', httpGetTrainWithTrainNumber);
trainsRouter.post('/', httpAddNewTrain);

module.exports = trainsRouter;