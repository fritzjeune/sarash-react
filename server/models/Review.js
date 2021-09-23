const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    dressId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Dress'
    },
    review: {
        type: String,
        maxlength: 250
    },
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        default: "unauthenticated user"
    },
    likes: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    comments: [{
        author: {
            type: mongoose.Schema.ObjectId,
            ref: 'User',
            default: "user"
        },
        text: String,
        likes: {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.models.ReviewSchema || mongoose.model('Review', ReviewSchema);