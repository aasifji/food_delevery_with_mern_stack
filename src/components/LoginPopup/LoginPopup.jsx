import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setLogin }) => {
    const [currState, setcurrState] = useState("Login")
    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img src={assets.cross_icon} alt="" onClick={() => setLogin(false)} />
                </div>
                <div className="login-popup-inputs">                   
                    {currState === "Login" ? <></> : <input type="text" placeholder='your name' required />
                    }
                    <input type="email" placeholder='your email' required />
                    <input type="password" placeholder='your password' required />
                </div>
                <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-pop-condition">
                    <input type="checkbox" required />
                    <p>By  countining, i agree to the terms of use & privecy policy.</p>
                </div>
                {
                    currState === "Login"
                        ?
                        <p>Create a new account? <span
                        onClick={()=>setcurrState("Sign Up")}>Click here</span></p>
                        :
                        <p>Already have an account ? <span onClick={()=>setcurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
