import { Grid } from "semantic-ui-react";
import Viewglass from "./ViewGlass";
const Watches = () => {
    return ( 
        <div className="container">
            <Grid padded="10vw">

                <div className="card mt-2 ms-2">
                <h1>Glasses</h1>
                </div>
                <Grid.Row  >
                    
                    <Grid.Column width={12}>
                    
                        <Viewglass/>
                       
                            
                         
                    </Grid.Column>
                </Grid.Row>
            </Grid>
       
        </div>
     );
}
 
export default Watches;