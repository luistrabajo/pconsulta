
import { Link, Outlet } from "react-router-dom";
import './costumer.css';

const Layout = () => {
    return(
            <div>
                <nav className="nav">
                    <ul className="ul">
                        <li className="li">
                            <Link to="/">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>   
                                     
                    </ul>
                    <hr/>
                </nav>               
            <Outlet/>
            </div>)
}

export default Layout