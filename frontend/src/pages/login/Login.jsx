import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    }

    const resp = await axios.post('http://localhost:3000/user/login', JSON.stringify(user), { 
      headers:{'Content-Type':'application/json'}
    })
    dispatch(login(resp.data.result))
    navigate('/');
  }
  return (
    <div className="content">
      <h1>LOGIN FORM</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password}
        onChange={(e)=>setPassword(e.target.value)} required/>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Login