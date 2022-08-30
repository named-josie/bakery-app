//import { useState, useEffect } from 'react';




const Cart = ({ cart, setCart}) => {
    let total = 0;
   
  
    cart.map((cake) => {
        total += cake.price;
    });
  
    return (
      <div className="Cart">
        <h2>Cart</h2>
        <h4>Discount: {cart.length >= 5 ? 10 : 0}%</h4>
        <h4>
          Total: $ {total}
        </h4>
        <ol>
          {cart.map((cake) => {
            return (
              <li>
                {cake.name}: ${cake.price}
                <button onClick={() => setCart([])}>Delete</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  };
  
  export default Cart;