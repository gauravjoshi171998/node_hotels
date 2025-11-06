const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    taste: {
        type: String,
        require: true,
        enum: ['sweet', 'spicy', 'sour']
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        emum: []
    },
    num_sale: {
        type: String,
        require: true
    }
})

const menuItem = mongoose.model('menuItem', menuItemSchema)
module.exports = menuItem