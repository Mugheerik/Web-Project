import { Card } from "react-bootstrap";
import { Grid } from "semantic-ui-react";

import Viewsring from "./Viewjewels";

import Newproducts from "./newProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Marquee from "./marquee";


const Jewellery = () => {
    return ( 
        <div className="container">
            
                <div className="g-col-12">

                
                <div className="card mt-2 ms-2">
              <Marquee name="JEWELLERY"/>
                </div>
                   
                        
                    
                        <Viewsring/>
                       
                            
                         
                    
                </div>
           
       
        </div>
     );
}
 
export default Jewellery;