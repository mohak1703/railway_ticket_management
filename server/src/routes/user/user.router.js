const express = require('express');
const { httpAddNewUser, httpGetUserWithEmail } = require('./user.controller.js');

const userRouter = express.Router();

userRouter.post('/', httpGetUserWithEmail);
userRouter.post('/register', httpAddNewUser);

module.exports = userRouter;