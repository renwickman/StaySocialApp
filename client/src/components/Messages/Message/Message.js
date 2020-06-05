import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {
    let sentByCurrentUser = false;

    const shortName = name.trim().toLowerCase();

    if(user === shortName){
        sentByCurrentUser = true;
    }

return (
    sentByCurrentUser
        ? (
            <div className="messageContainer">
                <p className="sentText pr-10">{shortName}</p>
                <div className="messageBox backgroundPurple">
                    <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        : (
            <div className="messageContainer justifyStart">
                <div className="messageBox backgroundLight">
                    <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
                </div>
                <p className="sentText pl-10">{user}</p>
            </div>
        )
    );
}

export default Message;