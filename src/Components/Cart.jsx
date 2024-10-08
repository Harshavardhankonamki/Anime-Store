import React from 'react';
import '../styles/Products.css'; // Import the CSS file
impo

const Cart = ({ cart = [], setCart }) => { // Default value for cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cartContainer">
      <h3>Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cartItem">
              <img src={item.image} alt={item.name} className="cartItemImage" />
              <div>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price.toFixed(2)}</p>
                <div>
                  <label>Quantity:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    className="quantityInput"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="removeButton">Remove</button>
                </div>
              </div>
            </div>
          ))}
          <h4>Total: ₹{totalAmount.toFixed(2)}</h4>
        </div>
      )}
    </div>
  );
};

export default Cart;
