import React from 'react';
//import userData from './component/data/data.json';
import userData from '../data/data.json';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './User.css'
const User = () => {
    // const first10 = userData.slice(0,10);
    const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(userData);
  },[])

    return (
        <div className="shop-container">
            <div className="player-container">
                <ul>
                    {
                        user.map(user => <Player player={user}></Player>)
                    }
                </ul>
            </div>
            <div className="cart-container">
            <h2>This is cart </h2>
            </div>

        </div>
    );
};

export default User;