import React from 'react';
import "./Login.css";

const Login = () => {
    return(
        <div className="signup">
            <div className="logo">
                <img className="img-logo"/>
                <h4>Vanga Kathaipam</h4>
            </div>
            <div className="background">
                <img className="img-background"/>
            </div>
            <div className="form-section">
                <h2> Create an account</h2>
                <div className="google">
                    <img />
                    <input placeholder="Signup with google" />
                </div>
                <div className="facebook">
                    <img />
                    <input placeholder="Signup with facebook" />
                </div>

                <input placeholder="Email Address" />
                <input placeholder="Password" />
                <input type="radio" id="correct" />
                <label for="correct" > I agree to term and conditions </label>
                <button className="button"> Signup</button>
                <p>Already have an account log in</p>

           </div>
        </div>
    )
}

export default Login