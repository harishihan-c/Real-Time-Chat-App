import React from 'react';
import "./Chat.css";
import LeftSide from "../../Components/LeftSide/LeftSide.jsx";
import ChatBox from "../../Components/ChatBox/ChatBox.jsx";
import RightSide from "../../Components/RightSide/RightSide.jsx";

const Chat = () => {
    return(
    <div className="main">
        <div className="chat-container">
            <LeftSide />
            <ChatBox />
            <RightSide />
        </div>
    </div>
    )
}

export default Chat