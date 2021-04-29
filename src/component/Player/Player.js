import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
const Player = (props) => {
    // console.log(props)
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
                <p><small>Salary: {value}$ million</small></p>
                <button
                 className="text-dark bg-warning
                 rounded border-danger"
                 onClick={() => props.handleAddPlayer(props.player)}
                 > 
                 <FontAwesomeIcon icon={faUserPlus}/> Add to team</button>
            </div>
        </div>
    );
};

export default Player;