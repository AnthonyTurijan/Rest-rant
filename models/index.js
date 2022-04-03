//requiring mongoose
const mongoose = require('mongoose')

//connecting mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports.Place = require('./places')