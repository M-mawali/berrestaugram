import React from "react";
import { Link } from "react-router-dom";
;

const NavBar = () => {

    return(
        <nav>
            <Link to='/RestaurantsList.js'>
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