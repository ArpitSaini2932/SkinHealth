import {useSelector, useDispatch} from "react-redux"
import {logout} from "../redux/userSlice"
import {useNavigate} from "react-router-dom"

const Dashboard =() =>{
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const user = useSelector((state)=> state.user.user)
  const isAuthenticated = useSelector((state )=> state.user.isAuthenticated)
  


const handleLogout =()=>{
  dispatch(logout())
  navigate("/login")
}


if (!isAuthenticated) {
  return <h2 className="text-center mt-10">Please login to access the dashboard</h2>;
}

return (
  <div className="h-screen flex flex-col items-center justify-center">
    <h2 className="text-2xl font-bold">Welcome, {user?.name}!</h2>
    <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4" onClick={handleLogout}>
      Logout
    </button>
  </div>
);
};

export default Dashboard;