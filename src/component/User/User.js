import React from 'react';
//import userData from './component/data/data.json';
import userData from '../data/data.json';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './User.css'
const User = () => {
    const [user, setUser] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
    setUser(userData);
    },[])
// console.log("added messi", cart);

    const handleAddPlayer = (ur) => {
        // console.log('Player added', ur);
        const newCart = [...cart, ur];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="player-container">
                <ul>
                    {
                        user.map(user => <Player
                            handleAddPlayer = {handleAddPlayer} player={user}></Player>)
                    }
                </ul>
            </div>
            <div className="cart-container">
            <h1>Team Member</h1>
            <h4>Total members: {cart.length}</h4>
            <h3>Player name:
                <ul>
                    {
                    cart.map( playerInfo => <li>{playerInfo.name}</li>)
                    }
                </ul>
            </h3>
            </div>

        </div>
    );
};

export default User;