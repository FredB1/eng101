import React from "react";
import { Link  } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="navigation">
            <nav className="nav navbar navbar-expand navbar-light bg-light">
            
                <Link className="navbar-brand" to="/">English with Fred</Link>
                <div className="navbar-nav ml-auto">
                    <Link to="/" className={"nav-link"} activestyle={"active nav-link"}>Home</Link>
                    <Link to="/about" className={"nav-link"} activestyle={"active nav-link"}>About</Link>
                    <Link to="/journals" className={"nav-link"} activestyle={"active nav-link"}>Writer's Journals</Link>
                 </div>
            </nav>
        </div>
        
            )
}

export default (Header);
