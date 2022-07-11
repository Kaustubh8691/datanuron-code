const router = require('express').Router();
//import todo model 
const data3model = require('../models/data3');


//create first route -- get data from database
router.get('/api3/items', async (req, res)=>{
    try{
      const allTodoItems = await data3model.find({});
      res.status(200).json(allTodoItems)
    }catch(err){
      res.json(err);
    }
  })

//create second route --add Todo Item to database
router.post('/api3/item', async (req, res)=>{
  try{
    const newItem = new data3model({
      name: req.body.name,
      address: req.body.address,
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})




//update item
router.put('/api3/item/:id', async (req, res)=>{
  try{
    //find the item by its id and update it
    const updateItem = await data3model.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json(updateItem);
  }catch(err){
    res.json(err);
  }
})



//export router
module.exports = router;