import React from 'react';
import logoImage from '../Assets/Images/logo2.png'
import {Link} from 'react-router-dom';
// import resortImage from '../Assets/CSS/Images/resort2.jpg'; // Adjust the path accordingly

const Navbar = () => {
    return (
        <>
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <span className="app-name">SojournQuest</span>
                </div>
                <div className="container-fluid">
                    <img src={logoImage} alt="Logo" className="imglogo" />
                </div>
                <ul className="user-links">
                    <li className="signin"><Link to="/signin">SignIn</Link></li>
                    <li className="logout"><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
            {/* <div class = "resortdiv">
            </div> */}
        </div>
        <div>
            
        </div>
        </>
    );
};
export default Navbar;

