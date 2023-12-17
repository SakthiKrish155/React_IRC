//import logo from './logo.svg';
//import './App.css';
import Main from "./Components/Main";
import './Assets/CSS/Main.css'
import Home from "./Components/Home";
import './Assets/CSS/Home.css'
import SignUp from "./Components/SignUp";
import './Assets/CSS/SignUp.css'
import SignIn from "./Components/SignIn";
import './Assets/CSS/SignIn.css'
import {Routes, Route,} from 'react-router-dom';
// import { AuthProvider } from './AuthContext';

function App() {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/logout" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
