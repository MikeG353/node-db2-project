const knex = require('knex')

const environment = process.env.NODE_ENV || 'development';
// setting variable for dynamic knex configuration based on the environment set in the env
const config = require('../knexfile.js')[environment];


module.exports = knex(config)