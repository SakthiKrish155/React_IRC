import React from 'react';
import logoImage from '../Assets/Images/logo2.png'
import { Link } from 'react-router-dom';
import {useState} from 'react'
import '../Assets/CSS/Dashboard.css'
// import Dashboard from './Dashboard';
// import resortImage from '../Assets/CSS/Images/resort2.jpg'; // Adjust the path accordingly

const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
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
                    <div class="menuToggle">
                        <button onClick = {toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                        </button>
                        <ul class= "menuItem">
                            <li><Link to = "/resort">Resorts</Link></li>
                            <li><Link to = "/villas">Villas</Link></li>
                            <li><Link to = "/hotels">Hotels</Link></li>
                            <li><Link to = "/treehouses">Treehouses</Link></li>
                            <li><Link to = "/camping">Camping</Link></li>
                            <li><Link to = "/homestays">Homestays</Link></li>                            
                        </ul>
                    </div>
                    <ul className="links">
                        <li className="logout"><Link to="/logout">Logout</Link></li>
                    </ul>
                </nav>
                {/* <div class = "resortdiv">
            </div> */}
            </div>
            <div class="image">
                <h1 class="t1">Embark on a journey to Serendipity</h1>
                <p class="t2">The whole world is different from yesterday</p>
            </div>
            {/* <Dashboard /> */}
        </>
    );
};
export default Main;

