import React from 'react'
import "./ChatBox.css"
import assets from "../../assets/assets.js";

const ChatBox = () => {

    return(
        <div className="chatbox">
            <div className="chatbox-top">
                <img src={assets.contact1} />
                <p> Harry <span>online</span></p>
            </div>

            <div className="chatbox-bottom">
                <input type="text" placeholder="Type a message" />
                <input type="file" />
            </div>
        </div>
    )
}

export default ChatBox