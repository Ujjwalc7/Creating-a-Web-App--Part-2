import { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useSelector } from 'react-redux';

const AddSales = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState(false);
  const token = useSelector(state=>state.auth.token);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      productName: name,
      quantity: quantity,
      amount: amount,
    }
    try {
      const resp = await axios.post('http://localhost:3000/data/new_entry', JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token},
    })
    console.log('kalu1');
    setName("");
    setQuantity(0);
    setAmount(0);
    setError(false);
    } catch (error) {
      console.log('kalu2');
      const status = error.response.status;
      if(status === 401){
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 6000);
      }
    }
  
  }
  return (
    <div className='content'>
      <h1>ADD SALE ENTRY</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="productName">Product name</label>
        <input type="text" id="productName" value={name}
        onChange={(e)=>setName(e.target.value)} required/>
        <label htmlFor="quantity">Quantity</label>
        <input type="number" id="quantity" value={quantity}
        onChange={(e)=>setQuantity(e.target.value)} required/>
        <label htmlFor="amount">Amount</label>
        <input type="number" id="amount" value={amount}
        onChange={(e)=>setAmount(e.target.value)} required/>
        <button className='btn btn-primary' type="submit">Submit</button>
      </form>

      {error && <div>
          <h3>error occured</h3>
        </div>}
    </div>
  )
}
export default AddSales