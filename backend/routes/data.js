const router = require('express').Router();
//import todo model 
const name1data = require('../models/data');


//create first route -- get data from database
router.get('/api/items', async (req, res)=>{
    try{
      const name1 = await name1data.find({});
      res.status(200).json(name1)
    }catch(err){
      res.json(err);
    }
  })

//create second route --add Todo Item to database
router.post('/api/item', async (req, res)=>{
  try{
    const newItem = new name1data({
      name: req.body.name,
      email:req.body.email
    })
    //save this item in database
    const saveItem = await newItem.save()
    res.status(200).json(saveItem);
  }catch(err){
    res.json(err);
  }
})




//update item
router.put('/api/item/:id', async (req, res)=>{
  try{
    //find the item by its id and update it
    const updateItem = await name1data.findByIdAndUpdate(req.params.id, {$set: req.body});
    res.status(200).json(updateItem);
  }catch(err){
    res.json(err);
  }
})




//export router
module.exports = router;