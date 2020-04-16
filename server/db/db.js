const config = require('../../knexfile').development
const connection = require('knex')(config)

module.exports = {
    getAllItems
}

function getAllItems(db = connection) {
    return db('Items').select()
}