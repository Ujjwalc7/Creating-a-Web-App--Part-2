import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

const Protected = ({children, auth = true}) => {
  const status = useSelector(state => state.auth.status);
  const [loding, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    if(auth && status !== auth){
      navigate('/login');
    }
    setLoading(false);
  },[status, navigate, auth])
  return (!loding && <div>{children}</div>)
}
export default Protected