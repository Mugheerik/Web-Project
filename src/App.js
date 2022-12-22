
import Jewellery from './component/Jewellery';
import Watches from './component/Watches';
import Glasses from './component/Glasses';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'

import Home from './comp/Home/home.js';
import Navbar from './comp/nav';

import About from './comp/about';

import Getstarted from './component/getstarted';
import Allproducts from './component/allprod';
import SignInForm from './component/newsignin';
import SignUpForm from './component/newsignup';
import "./component/Signin.css";
import Admininterface from './comp/admin/admin.js';
// import Footer from './comp/footer/footer';





function App() {

  
  return (
    <div className="App"  >
      
<div className='container'>

<div className='row'>
<div className='col-12'>

  <Navbar/>
</div>
</div>
<div className='row'>
  <div className='col-12'>

<Routes>
<Route path='/jewel' element = {<Jewellery/> }/>
<Route path='/products' element = {<Allproducts/> }/>
<Route path='/watch' element = {<Watches/> }/>
<Route path='/glass' element = {<Glasses/> }/>
<Route path='/getstart' element={<Getstarted/>}/>
<Route exact path="/" element={<Home/>} />
<Route path="/sign-in" element={<SignInForm/>}/>
<Route path='/sign-up' element={<SignUpForm/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/admininter' element={<Admininterface/>}/>
</Routes>
  </div>
</div>


<div className='row '>
  <div className='col-6'>

{/* <Footer/> */}
  </div>
</div>
</div>
     


      
        
      
    </div>
  );
}


export default App;
