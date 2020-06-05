import React from 'react';

import msgIcon from '../../icons/msgIcon.png';
import closeIcon from '../../icons/close_icon_2.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
        <img className="msgIcon" src={msgIcon} alt="message icon" />
            <h3>Room {room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close icon" /></a>
        </div>
    </div>
);

export default InfoBar;