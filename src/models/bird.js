const mongoose = require('mongoose')

const birdSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    count: {
        type: Number,
        default: 1,
        validate (value) {
            if(value < 1) {
                throw new Error('Count must be more than 0.')
            }
        }
    }
})

const Bird = mongoose.model('Bird', birdSchema)

module.exports = Bird