const mongoose = require('mongoose');

//create Schema
const dataSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true
  },
  email:{
    type:String,
    required: true
  }
})

//export this Schema
module.exports = mongoose.model('data1', dataSchema);