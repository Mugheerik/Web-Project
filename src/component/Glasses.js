import Products from "./products";




import { Card } from "react-bootstrap";
import { Grid } from "semantic-ui-react";
import CategoryJewel from "./categories jewel";



import Viewwomen from "./jewelwomen";

const Glasses = () => {
    return ( 
        <div className="container">
            <Grid padded="10vw">
                <Grid.Row  >
                   
                    <Grid.Column width={12}>
                    
                        <Viewwomen/>
                       
                            
                         
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
     );
}
export default Glasses;
