import Products from "./products";




import { Card } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import Viewglass from "./viewglasss";
import Marquee from "./marquee";








const Glasses = () => {
    return ( 
        <div className="container">
            
                <div className="g-col-12">

                
                <div className="card mt-2 ms-2">
                
                <Marquee name="GLASSES"/>
                
                </div>
                   
                        
                    
                        <Viewglass/>
                       
                            
                         
                    
                </div>
           
       
        </div>
     );
}
export default Glasses;
