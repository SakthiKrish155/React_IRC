  import React, { useState } from 'react';
import SignUp from './SignUp';
import {Link} from 'react-router-dom';


  const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = (e) => {
      e.preventDefault();
      // Check credentials (demo purpose)
      if (username === 'demo' && password === 'password') {
        // Redirect to home page (or any other page)
        window.location.href = '/';
      } else {
        setError('Invalid username or password');
      }
    };

    return (
      <>
      <div className="signin-container">
        <div className="signin-form">
          <h1>Sign In</h1>
          <form onSubmit={handleSignIn}>
            <input
              type="text"
              id = "username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id = "password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign In</button>
            <br/>   
            <Link to = "/signup" element = {<SignUp/>} style={{color:"White"}}>Not Registered yet?</Link>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
      <div class = "img">
      </div>
      </>
    );
  };

  export default SignIn;
