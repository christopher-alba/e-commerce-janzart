
const environment = process.env.ENVIRONMENT || 'development'
const config = require('../../knexfile.js')[environment]
const connection = require('knex')(config)

module.exports = {
    getAllItems,
    getItem
}

function getAllItems(db = connection) {
    return db('Items').select()
}

function getItem(id, db = connection) {
    return db('Items').where('id', id).select().first()
}