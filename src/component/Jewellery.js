import { Card } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import CategoryJewel from "./categories jewel";
import Viewsring from "./Viewjewels";

import Newproducts from "./newProducts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Viewwomen from "./jewelwomen";
const Jewellery = () => {
    return ( 
        <div className="container">
            <Grid padded="10vw">
                <Grid.Row  >
                    
                    <Grid.Column width={12}>
                    
                        <Viewsring/>
                       
                            
                         
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
     );
}
 
export default Jewellery;