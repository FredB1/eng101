import React from "react";
import {   } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
          <div className="container">
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
               <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://www.clipartbest.com/cliparts/bcy/x6G/bcyx6GrBi.png"
                alt=""/>
              </div>
              <div className="col-lg-5">
              <h1 className="font-weight-light">Welcome</h1>
              <p>
              This was put together for ASU English 101. 
              Throughout the year we will be creating five major writing journals to enhance our writing abilities. 
              These journals will teach us the fundamentals in:
              </p>
              <ul>
                <li>Critical Thinking: making judgements of what information is important to the reader</li>
                <li>Digital Technology: learning how to use technology to give us an advantage</li>
                <li>Habits of Mind: developing a positive frame of mind to assist us with writing resposibilties</li>
                <li>Knowledge of Conventions: using different formats to display our writing skills</li>
                <li>Rhetorical Knowledge: knowing how to address your targeted audience</li>
                <li>Writing Processes: using specific techniques in order to complete the journals</li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    )
}

export default (Home);