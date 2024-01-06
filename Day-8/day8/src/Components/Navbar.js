import { useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    const [regvisible, setregVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible)
    }
    const togglereg = () => {
        setregVisible(!regvisible)
    }

    const usernameInputRef = useRef(null)
    const passwordInputRef = useRef(null)
    const emailInputRef = useRef(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const ageInputRef = useRef(null)
    const cpasswordInputRef = useRef(null)
    const mobileInputRef = useRef(null)

    const [error, seterror] = useState(
        {
            username: '',
            password: ''
        }
    )
    const [regerror, setregerror] = useState(
        {
            username: '',
            password: '',
            cpassword: '',
            email: '',
            age: '',
            number: ''
        }
    )

    const Login = (e) => {
        e.preventDefault();

        const data = {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,

        };

        let usernameError = '';
        let passwordError = '';

        if (data.username.length === 0 || data.password.length === 0) {
            if (data.username.length === 0) {
                usernameError = 'Username is empty!';
            }
            if (data.password.length === 0) {
                passwordError = 'Password is empty!';
            }
        }
        else if (data.username.length < 6 || data.password.length < 6) {
            if (data.username.length < 6) {
                 usernameError = 'Minimum 6 characters for username.'; 
            }
            if (data.password.length < 6) {
                passwordError = 'Minimum 6 characters for password.';
            }
        }
        else if (data.username === 'username' && data.password === 'password') {
            toast.success('Welcome👋', {
                position: 'top-center',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
            setTimeout(() => {
            }, 2000);
        }
        else {
            seterror({ ...error, username: '' })
            usernameError = '';
            seterror({ ...error, password: '' })
            passwordError = '';
            toast.error('Invalid Username / Password', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }

        // if (data.password.length === 0) {
        //     passwordError = 'Password is empty!';
        // }
        // else if (data.password.length < 6) {
        //     passwordError = 'Minimum 6 characters for password.';
        // }
        // else {
        //     seterror({ ...error, password: '' })
        //     passwordError = '';
        //     if (data.username === 'username' && data.password === 'password') {
        //         toast.success('Welcome👋', {
        //             position: 'top-center',
        //             autoClose: 1000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: 'dark',
        //         });
        //         setTimeout(() => {
        //         }, 2000);
        //     } else {
        //         toast.error('Invalid Username / Password', {
        //             position: 'top-center',
        //             autoClose: 5000,
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             theme: 'dark',
        //         });
        //     }
        // }

        seterror({ username: usernameError, password: passwordError });
    };
    const Register = (e) => {
        e.preventDefault();

        const data = {
            username: usernameInputRef.current.value,
            password: passwordInputRef.current.value,
            cpassword: cpasswordInputRef.current.value,
            email: emailInputRef.current.value,
            age: ageInputRef.current.value,
            number: mobileInputRef.current.value
        };

        let usernameError = '';
        let emailError = '';
        let passwordError = '';
        let confirmpasswordError = '';
        let ageError = '';
        let numberError = '';

        if (data.username.length === 0) {
            usernameError = 'Username is empty!';
        }
        else if (data.username.length < 6) {
            usernameError = 'Minimum 6 characters for username.';
        }
        else {
            seterror({ ...error, username: '' })
            usernameError = '';
        }

        if (data.password.length === 0) {
            passwordError = 'Password is empty!';
        }
        else if (data.password.length < 6) {
            passwordError = 'Minimum 6 characters for password.';
        }
        else {
            seterror({ ...error, password: '' })
            passwordError = '';
        }

        if (data.cpassword.length === 0) {
            confirmpasswordError = 'Field is empty';
        }
        else if (data.cpassword.length < 6) {
            confirmpasswordError = 'Lengths does not match';
        }
        else if (data.cpassword !== data.password) {
            confirmpasswordError = 'Passwords do not match';
        }
        else {
            seterror({ ...error, cpassword: '' })
            confirmpasswordError = '';
        }

        if (data.email.length === 0) {
            emailError = 'Enter the mail Id';
        }
        else if (!emailRegex.test(data.email)) {
            emailError = 'Invalid Format';
        }
        else {
            seterror({ ...error, email: '' })
            emailError = '';
        }
        if (data.age.length === 0) {
            ageError = 'Enter your age';
        }
        else if (data.age < 10 || data.age > 90) {
            ageError = 'Invalid Format';
        }
        else {
            seterror({ ...error, age: '' })
            ageError = '';
        }

        if (data.number.length === 0) {
            numberError = 'Enter your age';
        }
        else if (data.number.length < 10) {
            numberError = 'Invalid Format';
        }
        else {
            seterror({ ...error, number: '' })
            numberError = '';
        }

        // Update the error state once with all the validation results
        setregerror({ username: usernameError, password: passwordError, cpassword: confirmpasswordError, email: emailError, age: ageError, number: numberError });
    };

    return (
        <>
            <div>
                <div className="navbar">
                    <div className="navtitle">
                        Hello world
                    </div>
                    <ul className="navlinks">

                        <li>
                            Home
                        </li>

                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li onClick={toggle}>
                            Login
                        </li>
                        <li onClick={togglereg}>
                            Register
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">Login</h2>
                            <form className="auth-container h-30v shadow" onSubmit={Login}>
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={usernameInputRef} />
                                {
                                    error.username === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {error.username}
                                        </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={passwordInputRef} />
                                {
                                    error.password === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {error.password}
                                        </span>
                                }
                                <span className='btn-container'>
                                    <input type="submit" value="Login" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
                {regvisible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">Register</h2>
                            <form className="reg-auth-container h-80v shadow" onSubmit={Register}>
                                <input type="text" name="" id="username" placeholder="Username" className="auth-input" ref={usernameInputRef} />
                                {
                                    regerror.username === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.username}
                                        </span>
                                }
                                <input type="email" name="" id="email" placeholder="Email" className="auth-input" ref={emailInputRef} />
                                {
                                    regerror.email === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.email}
                                        </span>
                                }
                                <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={passwordInputRef} />
                                {
                                    regerror.password === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.password}
                                        </span>
                                }
                                <input type="password" name="" id="cpassword" placeholder="Confirm Password" className="auth-input" ref={cpasswordInputRef} />
                                {
                                    regerror.cpassword === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.cpassword}
                                        </span>
                                }

                                <input type="age" name="" id="age" placeholder="Age" className="auth-input" ref={ageInputRef} />
                                {
                                    regerror.age === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.age}
                                        </span>
                                }
                                <input type="number" name="" id="number" placeholder="MobileNumber" className="auth-input" ref={mobileInputRef} />
                                {
                                    regerror.number === '' ?
                                        ''
                                        :
                                        <span className='error-comp'>
                                            {regerror.number}
                                        </span>
                                }
                                <span className='btn-container'>
                                    <input type="submit" value="Login" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50' onClick={togglereg}>Cancel</button>
                                </span>
                            </form>
                        </div>
                    </div>
                ) : ('')
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>
    )
}

export default NavBar