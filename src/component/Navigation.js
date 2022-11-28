import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Form, Image, NavItem,  } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css'

const products=[
    {name:"Jewellery", link:"/Jewel"},
    {name:"Watches", link:"/watch" },
    {name:"Glasses" , link:"/Glass"}
]

function Navigation() {
   
const [state,setState]=useState(products)

  return (
    <Navbar className=' navbar navbar-dark bg-dark navbar-fixed-top ' expand='lg' >
      <Container>
      <Navbar.Brand  className='light'>
        Access
            <img
              alt=""
              src="https://img.icons8.com/color/344/silver-ring.png "
              width="28"
              height="30"
              className="d-inline-block align-center"
            />
           ries
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link><Link  className='Link2' to='/About' >About</Link></Nav.Link>
           <Nav.Link><Link  className='Link2'  to='/Contact' >Contact us</Link></Nav.Link>
           
            <NavDropdown title="Products" id="basic-nav-dropdown">
              
              {  state.map((items,key) =>{
                    return(
<NavDropdown.Item ><Link 
 style={{textDecoration:"none" ,color:"black"}} to={items.link} >
    <label>{items.name}</label></Link></NavDropdown.Item>
                    )
                }
              )
            }

            </NavDropdown>
        
         <NavItem style={{paddingInlineStart:300}}>
            
           <input type="search" className="form-control rounded-pill"  placeholder =" Search Accessories">
             </input>
         </NavItem>
         <NavItem style={{marginInlineStart:10}}   >
           <Link to='/Signin'><Button variant ='outline-info' className='rounded-pill'>Sign in</Button></Link>
         </NavItem>
         <NavItem style={{marginInlineStart:10}}   >
            <Link to='/Signup' ><Button variant ='outline-info' className='rounded-pill'>Sign up</Button></Link>
         </NavItem>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
