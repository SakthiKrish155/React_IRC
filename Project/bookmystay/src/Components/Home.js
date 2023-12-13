import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        {/* Add your background image here */}
      </div>
      <div className="content">
        <h1 class = " home" style={{color:"beige"}}>Welcome to our Travel Booking Platform</h1>
        <p class = "homep">Explore the world with ease and comfort.</p>
        <p className="quote">"Traveling – it leaves you speechless, then turns you into a storyteller." – Ibn Battuta</p>
        {/* Link to Navbar */}
        <Link to="/navbar">
          <button className="explore-button">Explore Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
