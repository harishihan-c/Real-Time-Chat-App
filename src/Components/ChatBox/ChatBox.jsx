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
                <input type="file" id="image" accept="image/jpeg, image/png" hidden/>
                <label htmlFor="image"> <img className="attach" src={assets.attach}/></label>
                <input type="text" placeholder="Type a message" />
                <img className="send" src={assets.send}/>
            </div>
        </div>
    )
}

export default ChatBox