// requiring mongoose
const mongoose = require('mongoose')


//creating New Schema
const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

//creating helpers
placeSchema.methods.showEstablished = function(){
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

//exporting places.js
module.exports = mongoose.model('Place', placeSchema)
