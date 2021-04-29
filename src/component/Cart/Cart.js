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
                <div>
                    {
                    cart.map( playerInfo => <div className="border m-2 p-2">{playerInfo.name} <small>{playerInfo.value}$</small></div>)
                    }
                </div>
            </h3>
        </div>
    );
};

export default Cart;