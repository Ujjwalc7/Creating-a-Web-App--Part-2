import axios from "axios"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Revenue = () => {
  const token = useSelector(state=>state.auth.token);
  const [revenue, setRevenue] = useState(0);
  useEffect(()=>{
    const get = async() => {
      try {
        const resp = await axios.get('http://localhost:3000/data/api/total_revenue',{
          headers: {'Authorization': 'Bearer ' + token}
        })
        setRevenue(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    get();
  },[])
  return (
    <div><h1>TODAY'S REVENUE IS {revenue}</h1></div>
  )
}
export default Revenue