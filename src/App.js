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


function App() {

  
  return (
    <div className="App" >
      <style>{"body{background-color:dark}"}</style>
      <header>
        <BrowserRouter>
      <Navbar/>
<Routes>
<Route path='/jewel' element = {<Jewellery/> }/>
<Route path='/watch' element = {<Watches/> }/>
<Route path='/glass' element = {<Glasses/> }/>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/Signin' element={<Signin/>}/>
<Route path='/home' element={<Home/>}/>
<Route path='/sale' element={<Sale/>}/>
<Route path='/about' element={<About/>}/>
</Routes>

      </BrowserRouter>
      </header>
    </div>
  );
}


export default App;
