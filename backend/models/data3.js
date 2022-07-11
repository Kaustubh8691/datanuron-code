const mongoose = require('mongoose');

//create Schema
const dataSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  address:{
    type:String,
    // required: true
  }
})

//export this Schema
module.exports = mongoose.model('data3', dataSchema);