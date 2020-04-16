const express = require('express')
const db = require('../db/db')
const camelCase = require('camelcase-keys')
const router = express()

module.exports = router

router.get('/', (req, res) => {
    db.getAllItems()
        .then(items => {
            items.forEach(item => {
                item.item_img_ids = JSON.parse(item.item_img_ids)
                item.item_rating_ids = JSON.parse(item.item_rating_ids)
                item.item_review_ids = JSON.parse(item.item_review_ids)
                item.categories = JSON.parse(item.categories)
            })
            items = camelCase(items)

            res.json(items)
        })
})