import { useSelector } from 'react-redux';
import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const TopSales = () => {
  const token = useSelector(state=>state.auth.token);
  const [data, setData] = useState([]);
  useEffect(()=>{
    const get = async () => {
      try {
        const resp = await axios.get('http://localhost:3000/data/api/top_5_sales', {
        headers: {'authorization': 'Bearer ' + token}
      })
      setData(resp.data.data)
      } catch (error) {
        console.log(error);
      }
    }
    get();
  },[]);
  return (
    <div className="content">
      <h1>TOP 5 SALES</h1>
      <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Sales id:</th>
          <th>Product name</th>
          <th>Quantity</th>
          <th>Sales amount</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item) => (
          <tr key={item._id}>
            <td>1</td>
            <td>knmcsa</td>
            <td>{item.productName}</td>
            <td>{item.quantity}</td>
            <td>{item.amount}</td>
            {/* Render additional table data cells based on your data structure */}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}
export default TopSales

{/* <div className='div'>
        <ul className="table">
          <li>
            <h4 className='header serial'>#</h4>
          </li>
          <li>
            <h4 className='header'>Sales id:</h4>
          </li>
          <li>
            <h4 className='header'>Product name</h4>
          </li>
          <li>
            <h4 className='header quantity'>Quantity</h4>
          </li>
          <li>
            <h4 className='header'>Sale Amount</h4>
          </li>
        </ul>
      </div>
      <div className='table-data'>
        {data?.map(item=>(
          <div key={item._id} className='inner-div'>
            <ul className='ul-data'>
              <li>
                1
              </li>
              <li>ikoas</li>
              <li>{item.productName}</li>
              <li>{item.quantity}</li>
              <li>{item.amount}</li>
            </ul>
          </div>
        ))}
      </div> */}