const mongoose = require("mongoose");

const DressSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    availableSize: [{
        size: {
            enum: ["XXL", "XL", "L", "M", "S", "XS"],
            type: String,
            required: true
        },
        sizeDetails: {
            type: String,
            required: false
        },
        availableColor: [
        ],
        price: {
            type: Number,
            required: true
        },
        quatity: {
            type: Number,
            required: true
        },
    }],
    mainIMG: String,
    imgs: [
        {
            type: String
        }
    ],
    reviews: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Review'
    }]

});


module.exports = mongoose.models.DressSchema || mongoose.model('Dress', DressSchema);