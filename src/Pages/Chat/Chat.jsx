import React from 'react';
import "./Chat.css";

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