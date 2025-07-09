import React from 'react'
import "./LeftSide.css"
import assets from "../../assets/assets.js";

const LeftSide = () => {
    return(
        <div className="ls">
            <div className="ls-nav">
                <p>Chats</p>
                <input type="text" placeholder="Search" />
            </div>
            <div className="ls-contact">
                <div className="contact" >
                    <img src={assets.contact1} />
                    <div className="contact-details">
                        <p>Harry</p>
                        <span>Hello nigga</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LeftSide