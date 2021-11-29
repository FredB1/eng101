import React from "react";
import {   } from "react-router-dom";

const About = () => {
    return (
        <div className="container align-middle py-5" >
            <div className="row align-items-center my-5">
              <div className="col-lg-7">
               <img
               width="75%"
                className="img-fluid rounded mb-4 mb-lg-0"
                src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                alt="Software development"/>
              </div>
             <div className="col-lg-5">
                  
            <p>
            
                Hi, I'm Fred. This site is for my English 101 class. 
                Over the semester I will be adding my writing journals.
                As you may have guessed I'm a web developer and this site was created
                with React. I'm attending ASU to learn Software Engineering and build more complex apps.
        </p>
        </div>
        </div>
        </div>
        
            )
}

export default (About);