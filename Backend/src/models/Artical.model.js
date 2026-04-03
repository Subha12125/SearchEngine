const mongoose = require('mongoose');

const articalSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    },
    url: {
        type: String,
        default: null
    },
    category: {
        type: String,
        default: null
    }
})


const Artical = mongoose.model('Artical', articalSchema);

module.exports = Artical;