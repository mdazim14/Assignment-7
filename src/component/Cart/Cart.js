import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, player)=> total + player.value, 0)
    return (
        <div>
            <h2 className="text-danger">Team Member</h2>
            <h4>Total members: {cart.length}</h4>
            <p>Total budget: {total}$ million</p>
            <h3>Player name:
                <ul>
                    {
                    cart.map( playerInfo => <li>{playerInfo.name}</li>)
                    }
                </ul>
            </h3>
        </div>
    );
};

export default Cart;