import { useRef } from "react";

const LoginForm = () => {
    const emailIntputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = {
            email:emailIntputRef.current.value,
            password:passwordInputRef.current.value
        }
        console.log(formData);
        emailIntputRef.current.value = '';
        passwordInputRef.current.value = '';
        emailIntputRef.current.focus();
    }
    return(
        <div>
            <form onSubmit = {handleSubmit} method = "POST">
                <div>
                    <label htmlFor = "email">Email</label>
                    <input 
                        type = "email"
                        id = "email"
                        name = "email"
                        ref = {emailIntputRef}
                        required/>
                </div>
                <div>
                    <label htmlFor = "password">Password:</label>
                    <input 
                        type = "password"
                        id = "password"
                        name = "password"
                        ref = {passwordInputRef}
                        maxLength={15}
                        minLength={8}
                        required/>
                </div>
                <div>
                    <button type = "submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default LoginForm