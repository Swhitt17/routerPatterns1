import React from "react"

import {Link} from "react-router-dom"


const NavBar = () => {
    return(
        <nav>
            <Link to="/dogs/Whiskey">
                Whiskey
            </Link>
            <Link to="/dogs/Duke">
                Duke
            </Link>
            <Link to="/dogs/Perry">
                Perry
            </Link>
            <Link to="/dogs/Tubby">
                Tubby
            </Link>
        </nav>
    );
}

export default NavBar;