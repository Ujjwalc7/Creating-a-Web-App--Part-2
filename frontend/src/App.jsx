import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddSales from './pages/add_sales/AddSales'
import TopSales from './pages/top_sales/TopSales'
import Revenue from './pages/revenue/Revenue'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Protected from './protected_layout/Protected'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={
          <Protected auth={true}>
            <AddSales/>
          </Protected>
        }/>
        <Route path='/topSales' element={
          <Protected auth={true}>
            <TopSales/>
          </Protected>
        }/>
        <Route path='/revenue' element={
          <Protected auth={true}>
            <Revenue/>
          </Protected>
        }/>
        <Route path='/login' element={
          <Protected auth={false}>
            <Login/>
          </Protected>
        }/>
        <Route path='/register' element={
          <Protected auth={false}>
            <Register/>
          </Protected>
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
