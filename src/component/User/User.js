import React from 'react';
//import userData from './component/data/data.json';
import userData from '../data/data.json';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './User.css'
import Cart from '../Cart/Cart';
const User = () => {
    const [user, setUser] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
    setUser(userData);
    },[])

    const handleAddPlayer = (player) => {
        // console.log('Player added', player);
        const newCart = [...cart, player];
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
            <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default User;