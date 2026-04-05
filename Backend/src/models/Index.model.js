const mongoose = require("mongoose");

const indexSchema = new mongoose.Schema({
    word: {
        type: String,
        required: true,
    },
    articals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artical'
        }
    ]
})

const Index = mongoose.model('Index', indexSchema);

module.exports = Index;