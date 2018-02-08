import React from "react";



// Functional Component
const Navbar = (props) => {


    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src="/assets/images/geolocationIcon.png" width="30" height="30" />
            </a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" name = "search" placeholder="Search" aria-label="Search" onChange = {props.getValues}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;






