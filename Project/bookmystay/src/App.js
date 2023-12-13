//import logo from './logo.svg';
//import './App.css';
import Navbar from "./Components/Navbar";
import './Assets/CSS/Navbar.css'
import Home from "./Components/Home";
import './Assets/CSS/Home.css'
import SignUp from "./Components/SignUp";
import './Assets/CSS/SignUp.css'
import SignIn from "./Components/SignIn";
import './Assets/CSS/SignIn.css'
import { Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path = "/" element = {<Home/>}/> 
        {/* <Route path = "/navbar" element = {}/> */}
        <Route path = "/signup" element = {<SignUp/>}/>
        <Route path = "/signin" element = {<SignIn/>}/>
        <Route path = "/logout" element = {<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
