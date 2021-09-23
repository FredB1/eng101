import React from "react";
import {  withRouter } from "react-router-dom";

const Footer = () => {
    return (
        <div >
           <footer className="py-4 bg-light fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-muted">
            Copyright &copy; English 101 with Fred 2021
          </p>
        </div>
      </footer>  
        </div>
        
            )
}

export default withRouter(Footer);