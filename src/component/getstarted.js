
import React from "react";
import {  NavLink } from "react-router-dom";



const Getstarted = () => {


    return ( 
             
        

      
        <div className="App1">
         
          <div className="appForm mt-4">
           

            <div className="formTitle mt-4">
              <NavLink
                to="/sign-in"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign In
              </NavLink>{" "}
              or{" "}
              <NavLink
                exact
                to="/sign-up"
                activeClassName="formTitleLink-active"
                className="formTitleLink"
              >
                Sign Up
              </NavLink>
            </div>

            
          </div>
        </div>
       
     
                
     );
}
 
export default Getstarted;