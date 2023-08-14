const express = require('express');
const { httpGetAdminWithName } = require('./admin.controller.js');

const adminRouter = express.Router();

adminRouter.post('/', httpGetAdminWithName);

module.exports = adminRouter;