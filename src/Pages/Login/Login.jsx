import React from 'react';
import "./Login.css";
import assets from '../../assets/assets.js'

const Login = () => {
    return(
        <div className="signup">

            <div className="background">
                <div className="logo">
                    <img className="img-logo" src={assets.logo}/>
                    <h4>Vanga Kathaipam</h4>
                </div>

                <img className="img-background" src={assets.background}/>
            </div>


            <div className="form-section">
                <h2> Create an account</h2>
                <div className="google">
                    <img src={assets.google}/>
                    <button> Signup with google</button>
                </div>
                <div className="facebook">
                    <img src={assets.facebook}/>
                    <button> Signup with facebook</button>
                </div>

                <div className="or-box">
                    <div className="left"></div>
                    <span>OR</span>
                    <div className="right"></div>
                </div>

                <input placeholder="Email Address" className="email-input"/>
                <input placeholder="Password" className="password-input" />
                <div className="term">
                    <input type="checkbox" id="correct" />
                    <label htmlFor="correct" > I agree to term and conditions </label>
                </div>
                <button className="signup-button"> Signup</button>
                <p className="login-text">Already have an account? <a href="#">log in</a> </p>

           </div>
        </div>
    )
}

export default Login