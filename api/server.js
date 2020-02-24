const express = require("express");

const userRouter = require("../users/users-router");
const configureMiddleware = require("./configure-middleware.js");

const server = express();

configureMiddleware(server);

server.use("/api/users", userRouter);

module.exports = server;
