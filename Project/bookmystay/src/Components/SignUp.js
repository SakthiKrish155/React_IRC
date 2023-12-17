    import {Link} from 'react-router-dom';
    
    const SignUp = () => {
        const handleSubmit = (event) => {
            event.preventDefault();
        };
        return (
            <>
            
            <div className="signup-container">            
                <h1 class = "h1">Create an Account</h1>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Full Name:</label>
                    <input type="text" id="fullname" name="fullname" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password" class = "pass">Password:</label>
                    <input type="password" id="password" name="password" class = "password" required />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="123-456-7890" />

                    <Link to = "/main" element = {<SignUp/>}><button type="submit" class = "signup">Sign Up</button></Link>
                </form>
                <div className="alternative-signup">
                    <p>Or sign up using:</p>
                    <button className="google-btn">Sign Up with Google</button>
                    <button className="facebook-btn">Sign Up with Facebook</button>
                </div>
            </div>
            <div className="image-container">
            </div>
            </>
        );
    };
 export default SignUp;
