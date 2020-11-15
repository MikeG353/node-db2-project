const express = require('express');

const CarsRouter = require('../api/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars-router', CarsRouter);

module.exports = server;
