const environment = process.env.NODE_ENV || 'development'
console.log(environment)

const config = require('../../knexfile.js')[environment]
const connection = require('knex')(config)

module.exports = {
  getAllItems,
  getItem
}

function getAllItems (db = connection) {
  return db('Items').select()
}

function getItem (id, db = connection) {
  return db('Items').where('id', id).select().first()
}
