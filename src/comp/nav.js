import { Link ,useNavigate} from "react-router-dom";
import { Dropdown } from "bootstrap";
import "./nav.css"
const Navbar = () => {
  const navigate=useNavigate();
  
    
    return ( 
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div className="container-fluid">
          <button  onClick={()=>navigate("")} className="navbar-brand btn1" >
            {/* <Link className="Link2 active" to='/home'> */}
          Access
            <img
              alt=""
              src="https://img.icons8.com/color/344/silver-ring.png "
              width="28"
              height="30"
              classNameName="d-inline-block align-center"
              />
           ries
              {/* </Link> */}
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             
              <li className="nav-item">
              <button className="btn1 pt-2" onClick={()=>navigate("/about")}>About</button>
              </li>
              <li className="nav-item dropdown">
                <span className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </span>
                <ul className="dropdown-menu">
                  <li><button className="dropdown-item " onClick={()=>navigate("./products")} >All products</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./jewel")} >Jewellery</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./glass")} >Glasses</button></li>
                  <li><button className="dropdown-item " onClick={()=>navigate("./watch")} >Watches</button></li>
               
                 
                </ul>
              </li>
              {/* <li className="nav-item">
              <Link  className='nav-link  Link2'  to='/contact' >Contact</Link>
              </li> */}
              <li className="nav-item">
              <Link to='/getstart'  className='btn btn-outline-info rounded-pill '>Get Started</Link>
              </li>
            <li  className="nav-item">
               
             </li>
        
            </ul>
            <form className="d-flex flex-row justify-content-center " role="search">
              <input className="form-control me-2  rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-info rounded-pill" type="submit">Search</button>
            </form>
          </div>
        </div>
        
      </nav>
     );
}
 
export default Navbar;