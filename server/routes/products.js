const express = require('express')
const db = require('../db/db')
const camelCase = require('camelcase-keys')
const router = express.Router()
const stripe = require('stripe')('sk_test_AuJfCEy03BtZsDtoVvMi51yf00GdBPWklZ');

module.exports = router

router.get('/products', (req, res) => {
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

router.get('/product/:id', (req, res) => {
    db.getItem(req.params.id)
        .then(item => {
            item.item_img_ids = JSON.parse(item.item_img_ids)
            item.item_rating_ids = JSON.parse(item.item_rating_ids)
            item.item_review_ids = JSON.parse(item.item_review_ids)
            item.categories = JSON.parse(item.categories)
            item = camelCase(item)
            res.json(item)
        })
})

router.post('/product/checkout', (req, res) => {

    console.log(req.body);


    stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            name: 'T-shirt',
            description: 'Comfortable cotton t-shirt',
            images: ['https://example.com/t-shirt.png'],
            amount: 500,
            currency: 'nzd',
            quantity: 1,
        }],
        success_url: `https://example.com/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: 'https://example.com/cancel',
    }).then(response => {

        res.json(response)
    })


})