import React from "react";
import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="navigation">
            <nav className="nav navbar navbar-expand navbar-light bg-light">
            
                <Link className="navbar-brand" to="/">English 101 with Fred</Link>
                <div className="navbar-nav ml-auto">
                    <Link to="/" className={props.location.pathname === "/" ? "active nav-link" : "nav-link"}>Home</Link>
                    <Link to="/about" className={props.location.pathname === "/about" ? "active nav-link" : "nav-link"}>About</Link>
                    <Link to="/journals" className={props.location.pathname === "/journals" ? "active nav-link" : "nav-link"}>Writer's Journals</Link>
                 </div>
            </nav>
        </div>
        
            )
}

export default withRouter(Header);
