import React from 'react';
import "./Login.css";
import assets from '../../assets/assets.js'
import {useState} from 'react'
import {signup, login} from "../../Config/authentication.js"

const Login = () => {

    const [currentState, setState] = useState("Signup");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = () =>{
        currentState === "Signup" ? signup(email, password):login;
    }
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
                {
                    currentState === "Signup"
                    ?<h2> Create an account</h2>
                    :<h2> Log in account</h2>
                }
                <div className="google">
                    <img src={assets.google}/>
                    <button> {currentState} with google</button>
                </div>
                <div className="facebook">
                    <img src={assets.facebook}/>
                    <button> {currentState} with facebook</button>
                </div>

                <div className="or-box">
                    <div className="left"></div>
                    <span>OR</span>
                    <div className="right"></div>
                </div>

                <input onChange={(e) => {setEmail(e.target.value)}} placeholder="Email Address" className="email-input"/>
                <input onChange={(e) => {setPassword(e.target.value)}}  placeholder="Password" className="password-input" />
                {
                    currentState === "Signup"
                    ? <div className="term">
                            <input type="checkbox" id="correct" />
                            <label htmlFor="correct" > I agree to term and conditions </label>
                        </div>
                    :null
                }
                <button className="signup-button" onClick={onSubmitHandler}> {currentState}
                </button>
                {
                    currentState === "Signup"
                    ?<p className="login-text">Already have an account? <span onClick = {() => setState("Login")}>Log in</span></p>
                    :<p className="login-text">Don't have an account? <span onClick = {() => setState("Signup")}>Sign up</span></p>

                }


           </div>
        </div>
    )
}

export default Login