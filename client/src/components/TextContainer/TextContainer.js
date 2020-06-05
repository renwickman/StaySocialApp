import React from 'react';

import './TextContainer.css';

import msgIcon from '../../icons/msgIcon.png';

const TextContainer = ({ users }) => (
    <div className="textContainer">
      <div>
        <h1>StayHomeSocial App <span role="img" aria-label="emoji">💬</span></h1>
        <h3>Created with MERN and Socket.IO</h3>
        <h3>Give it go at your home! <span role="img" aria-label="emoji">⬅️</span></h3>
      </div>
      {
        users
          ? (
            <div>
              <h1>People currently chatting:</h1>
              <div className="activeContainer">
                <h2>
                  {users.map(({name}) => (
                    <div key={name} className="activeItem">
                      {name}
                      <img alt="Online Icon" src={msgIcon}/>
                    </div>
                  ))}
                </h2>
              </div>
            </div>
          )
          : null
      }
    </div>
  );
  
  export default TextContainer;