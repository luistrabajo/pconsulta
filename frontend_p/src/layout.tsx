
import { Link, Outlet } from "react-router-dom";
import './costumer.css';

const Layout = () => {
    return(
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12   my-0"> 
           
            <nav className="nav bg-dark  border-bottom border-body" data-bs-theme="dark"> 
                <Link to="/" className="nav-link active p-4">Register</Link>
                <Link to="/login"  className="nav-link active p-4">Login</Link>             
            </nav> 
            <div className="col-12  p-5 ">
                <Outlet/>
            </div>          
                
        </div>)
}

export default Layout