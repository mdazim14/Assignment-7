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

    const handleAddPlayer = (ur) => {
        console.log('Player added', ur);
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
            <h2>This is cart </h2>
            <h4>Total members: {cart.length} </h4>
            </div>

        </div>
    );
};

export default User;