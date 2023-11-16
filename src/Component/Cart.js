import React, { useState } from 'react';
import './Cart.css'; // Import your CSS file for styling

function CartItem({ id, name, price, onRemove }) {
  return (
    <div className="cart-item">
      <span>{name} - ₹{price}</span>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  );
}

function Cart({ cartItems, onRemoveItem }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} id={item.id} name={item.name} price={item.price} onRemove={onRemoveItem} />
          ))}
          <p>Total Price: ₹{totalPrice.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
