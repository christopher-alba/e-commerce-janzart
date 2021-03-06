
exports.up = function (knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.binary('hash')
    })
}
exports.down = function (knex) {
    return knex.schema.dropTable('users')
};
