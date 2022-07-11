import React, { useEffect, useState } from 'react'
import "../componets.css";
import axios from 'axios';


const Component1 = () => {
     
    const [name, setName] = useState('');
    const[email,setEmail]=useState('')
    const [listItems, setListItems] = useState([]);
    const [isUpdating, setIsUpdating] = useState('');
    const [updatingemail,setUpdatingEmail]=useState('');
    const [updateItemText, setUpdateItemText] = useState('');
    const [count, setcount] =useState(0);

  //add new student to database
  const addItem = async (e) => {
    e.preventDefault();
    try{
    
      const res = await axios.post('https://datanur.herokuapp.com/api/item', {name: name,email:email})
      setListItems(prev => [...prev, res.data]);
      setName('');
      setEmail('');
    }catch(err){
      console.log(err);
    }
  }

  //Create function to fetch all data from database 
  var getItemsList = async () => {
    try{
      const res = await axios.get('https://datanur.herokuapp.com/api/items')
      console.log(res)
      console.log(res.data.length)
      setListItems(res.data);
      setcount(res.data.length)
      console.log('render')
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    
    getItemsList()
  },[]);

  

  //Update student
  const updateItem = async (e) => {
    e.preventDefault()
    try{
      const res = await axios.put(`https://datanur.herokuapp.com/api/item/${isUpdating}`, {name: updateItemText,email:updatingemail})
      console.log(res.data)
      const updatedItemIndex = listItems.findIndex(item => item._id === isUpdating);
      const updatedItem = listItems[updatedItemIndex].item = updateItemText;
      console.log(updatedItem)

      setUpdateItemText('');
      setIsUpdating('');
      setUpdatingEmail('');
      getItemsList();
    }catch(err){
      console.log(err);
    }
  }
  //updating  show input field where we will create our updated data
  const renderUpdateForm = () => (
    <form className="update-form" onSubmit={(e)=>{updateItem(e)}} >
      <input className="update-new-input" type="text" placeholder="name" onChange={e=>{setUpdateItemText(e.target.value)}} value={updateItemText} />
      <input className="update-new-input" type="text" placeholder="email" onChange={e=>{setUpdatingEmail(e.target.value)}} value={updatingemail} />

      <button className="update-new-btn" type="submit">Update</button>
    </form>
  )
  return (
  
    <div className="container">
      <h1>list of students By Email</h1>
      <h4>count:{count}</h4>
      <form className="form" onSubmit={e => addItem(e)}>
        <input type="text" placeholder='name' required='True' onChange={e => {setName(e.target.value)} } value={name} />
        <input type="text" placeholder='email' required='True' onChange={e => {setEmail(e.target.value)} } value={email} />
        <button type="submit" >Add</button>
      </form>
      <div className="student">
        {
          listItems.map((item,index) => (
          <div className="student-data" key={index}>
            {
              isUpdating === item._id
              ? renderUpdateForm()
              : <>
                  <p className="student-content">{item.name}</p>
                  <p className="student-content">{item.email}</p>
                  <button className="update" onClick={()=>{setIsUpdating(item._id)}}>Update</button>
                </>
            }
          </div>
          ))
        }
        

      </div>
    </div>
  )
}

export default Component1