const mongoose = require('mongoose');

//create Schema
const dataSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
     type:Number,
    required: true
  }
})

//export this Schema
module.exports = mongoose.model('data2', dataSchema);