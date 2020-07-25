const mongoose = require('mongoose')
const Bird = require('./models/bird')
 
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// ei tarvitse exportata
// module.exports = mongoose