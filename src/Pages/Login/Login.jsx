import React from 'react';
import "./Login.css";

const Login = () => {
    return(
        <div className="login">
            <img src='' alt='logo' />
            <form className="login-form">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Username" className="username-input"/>
                <input type="email" placeholder="Email Address" className="email-input"/>
                <input type="password" placeholder="Password" className="password-input"/>
                <input type="password" placeholder="Confirm Password" className="confirm-password-input"/>
                <button type="submit">Sign Up</button>
                <div className="login-term">
                    <input type="checkbox" />
                    <p>I accept the terms and conditions</p>
                </div>
                <div className="login-forgot">
                    <p>Already have an account <span>Sign in</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login