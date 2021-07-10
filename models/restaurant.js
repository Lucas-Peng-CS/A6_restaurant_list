const mongoose = require('mongoose')
const Schema = mongoose.Schema
cosnt restaurantSchema = new Schema({
  id: {
    type:Number
  },
  name: {
    type:String,
    require:true
  },
  name_en: {
    type:String,
  },
  category:{
    type:String,
    require:true
  },
  image: {
    type:String,
    require:true
  },
  location: {
    type:String,
    require:true
  },
  phone: {
    type:Number,
    require:true
  },
  google_map: {
    type:String,
    require:true
  },
  rating: {
    type:Number,
    require:true
  },
  description: {
    type:String,
    require:true
  }
})
module.exports = mongoose.model('Restaurant', restaurantSchema)