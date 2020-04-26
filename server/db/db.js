const config = require('../../knexfile').production
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