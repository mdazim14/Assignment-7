import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    console.log(props)
    const {name, image, value, position, Nationality} = props.player;
    return (
        <div className="player">
            <div className="img-size">
                <img src={image} alt=""/>
            </div>
            <div className="player-name">
                <h4>{name}</h4>
                <p><small>Position: {position}</small></p>
                <p><small>Nationality: {Nationality}</small></p>
                <p><small>Value: {value}</small></p>
                <button className="main-button"> <FontAwesomeIcon icon={faUserPlus} /> Add to team</button>
            </div>
            
        </div>
    );
};

export default Player;