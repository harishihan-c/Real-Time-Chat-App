import React from 'react'
import "./LeftSide.css"
import assets from "../../assets/assets.js";
import {logout} from '../../config/authentication.js'

const LeftSide = () => {
    return(
        <div className="ls">
            <div className="ls-nav">
                <p>Chats</p>
                <input type="text" placeholder="Search" />
                <img onClick={logout} src={assets.settings} alt="settings"/>
            </div>
            <div className="ls-contact">
                {Array(12).fill("").map((item, index) => (
                    <div key={index} className="contact" >
                        <img src={assets.contact1} />
                        <div className="contact-details">
                            <p>Harry</p>
                            <span>Hello nigga</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LeftSide