const express = require('express');
const { httpAddNewStoppage } = require('./stoppage.controller.js');

const stoppageRouter = express.Router();

stoppageRouter.post('/', httpAddNewStoppage);

module.exports = stoppageRouter;