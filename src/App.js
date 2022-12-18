import Navigation from './component/Navigation';
import Jewellery from './component/Jewellery';
import Watches from './component/Watches';
import Glasses from './component/Glasses';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Signup from './comp/signup';
import Signin from './component/signin';
import Home from './comp/home';
import Navbar from './comp/nav';
import Sale from './comp/sale';
import About from './comp/about';
import { useRef } from 'react';
import Getstarted from './component/getstarted';
import Allproducts from './component/allprod';
import SignInForm from './component/newsignin';
import SignUpForm from './component/newsignup';
import "./component/Signin.css";


function App() {

  
  return (
    <div className="App"  >
      

      <header>
        <BrowserRouter>
      <Navbar/>
     
      
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
</Routes>

      </BrowserRouter>
      </header>
    </div>
  );
}


export default App;
