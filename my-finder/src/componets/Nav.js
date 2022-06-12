import React from "react";
import { Link } from "react-router-dom";
;

const NavBar = () => {

    return(
        <nav className="navBar">
            <Link to='/'>
            <ul>  
                <li>Berrestaugram</li>
            </ul>
            </Link>
            <ul> 
                <li>About us</li> 
            </ul>
        </nav>
    )
}
export default NavBar