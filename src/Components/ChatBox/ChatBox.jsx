import React from 'react'
import "./ChatBox.css"
import assets from "../../assets/assets.js";

const ChatBox = () => {

    return(
        <div className="chatbox">
            <div className="chatbox-top">
                <img src={assets.contact1} />
                <p> Harry <span>online</span></p>
                <img src={assets.info} className="info-icon"/>
            </div>

            <div className="chatbox-message">
                <div className="message-date">
                    <span>Today</span>
                </div>

                <div className="r-message">
                        <p className="msg">  quia quidem, quisquam quos reprehenderit.</p>
                        <div>
                            <img src={assets.contact1} />
                            <p>11.00 AM</p>
                        </div>
                </div>

                <div className="s-message">
                    <img className="msg-img" src={assets.contact1} />
                    <div>
                        <img src={assets.contact1} />
                        <p>11.00 AM</p>
                    </div>
                </div>

                <div className="s-message">
                        <p className="msg">  quia quidem, quisquam quos reprehenderit.</p>
                        <div>
                            <img src={assets.contact1} />
                            <p>11.00 AM</p>
                        </div>
                </div>
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