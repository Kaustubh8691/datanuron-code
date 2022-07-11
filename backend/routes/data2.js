const router = require('express').Router();
//import todo model 
const data2model = require('../models/data1');


//create first route -- get data from database
router.get('/api2/items', async (req, res)=>{
    try{
      const data2 = await data2model.find({});
      res.status(200).json(data2)
    }catch(err){
      res.json(err);
    }
  })

//create second route --add Todo Item to database
router.post('/api2/item', async (req, res)=>{
  try{
    const newItem = new data2model({
      name: req.body.name,
      age: req.body.age,
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})




//update item
router.put('/api2/item/:id', async (req, res)=>{
  try{
    //find the item by its id and update it
    const updateItem = await data2model.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json(updateItem);
  }catch(err){
    res.json(err);
  }
})




//export router
module.exports = router;