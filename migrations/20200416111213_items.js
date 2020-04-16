
exports.up = function (knex) {
    return knex.schema.createTable('Items', (table) => {
        table.increments().primary()
        table.string('item_name').defaultsTo("Item Name")
        table.string('item_description').defaultsTo("Item Description")
        table.string('item_img_ids').references('Item_imgs.item_img_id')
        table.integer('item_price').defaultsTo(20)
        table.string('item_rating_ids').references('Item_ratings.item_rating_id')
        table.string('item_review_ids').references('Item_reviews.review_id')
        table.integer('order_count').defaultsTo(0)
        table.integer('favourites_count').defaultsTo(0)
        table.string('categories')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('Items')
};
