const environment = process.env.NODE_ENV || 'development';  // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];  // require environment's settings from knexfile
const database = require('knex')(configuration);       // connect to DB via knex using env's settings