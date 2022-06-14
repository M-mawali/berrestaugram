import React from "react";
import { Link } from "react-router-dom";
;
 // crating nav page
const NavBar = () => {

    return(
        <nav className="navBar">
            <Link to='/'>
            <ul>  
                <li style={{fontSize:'40px', fontFamily:"cursive"}}>Berrestaugram</li>
            </ul>
            </Link>
        </nav>
    )
}
export default NavBar