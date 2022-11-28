
import { Link } from "react-router-dom";
import { Card, Divider, Dropdown, Grid, Image, Label, List  } from "semantic-ui-react";



const CategoryJewel = () => {

    return ( 
        <div className="container">
          
           
                <Card color="teal" >
                    <Card.Content>
                    <Card.Header>Categories</Card.Header>
                        

                       <List animated verticalAlign="middle">
                        <List.Header > <Image avatar src="https://react.semantic-ui.com/images/avatar/small/matthew.png" size="large" />MENS</List.Header>
                        <List.Item>
                            <Image avatar src='https://img.icons8.com/color/344/silver-ring.png'/>
                        <List.Content>
                        <Link className="Link" to="/sring"  >Silver ring</Link> 
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://i.pinimg.com/736x/c0/a4/23/c0a423ab09b737dc46c614fad1cc61cf--mens-silver-bracelets-bracelet-men.jpg'/>
                        <List.Content>
                        <Link className="Link">Silver ring</Link> 
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://img.icons8.com/color/344/silver-ring.png'/>
                        <List.Content>
                        <Link className="Link">Silver ring</Link> 
                        </List.Content>
                        </List.Item>
                        <Divider/>
                        <List.Header ><Image avatar src="https://react.semantic-ui.com/images/avatar/small/molly.png" size="large" />WOMENS</List.Header>
                        <List.Item>
                            <Image avatar src='https://img.icons8.com/color/344/silver-ring.png'/>
                        <List.Content>
                        <Link className="Link" to="/wsring" >Silver ring</Link> 
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src="https://img.icons8.com/color/344/silver-ring.png"/>
                        <List.Content>
                        <Link className="Link">Silver ring</Link> 
                        </List.Content>
                        </List.Item>
                        <List.Item>
                            <Image avatar src='https://img.icons8.com/color/344/silver-ring.png'/>
                        <List.Content>
                        <Link className="Link">Silver ring</Link>  
                        </List.Content>
                        </List.Item>

                       </List>
                    
                        
                       
                    </Card.Content>
                </Card>
            
        </div>
     );
}
 
export default CategoryJewel;