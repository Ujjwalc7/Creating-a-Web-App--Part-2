import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';
import './nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const status = useSelector(state=>state.auth.status);
  const dispatch = useDispatch();
  return (
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link to={"/"}>SALES APP</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"}>ADD SALES</Link>
        </li>
        <li className="nav-item">
        <Link to={"/topSales"}>TOP SALES</Link>
        </li>
        <li className="nav-item">
        <Link to={"/revenue"}>TODAY'S TOTAL REVENUE</Link>
        </li>
        {!status && <li className="nav-item">
        <Link to={"/login"}>LOGIN</Link>
        </li>}
        {!status && <li className="nav-item">
        <Link to={"/register"}>REGISTER</Link>
        </li>}
        {status && <li className="nav-item">
        <button className='button' onClick={()=>{
          dispatch(logout())
        }}>LOGOUT</button>
        </li>}
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar