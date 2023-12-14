//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/about" element = {<About/>}/>
      <Route path = "/contact" element = {<Contact/>}/>

      {/* <Route path = "/login" element = {<Login/>}/> */}
    </Routes>
    </div>
  );
}

export default App;
