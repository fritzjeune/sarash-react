
const mongoose = require("mongoose");

const SuscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    isUser: Boolean
});


module.exports = mongoose.models.SuscriberSchema || mongoose.model('Suscriber', SuscriberSchema);