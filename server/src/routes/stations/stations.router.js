const express = require('express');
const { httpAddNewStation ,httpGetStationsWithTrainNumber } = require('./stations.controller.js');

const stationsRouter = express.Router();

stationsRouter.get('/:train_number', httpGetStationsWithTrainNumber);
stationsRouter.post('/', httpAddNewStation);

module.exports = stationsRouter;