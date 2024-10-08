import React from 'react';

const Checkout = ({ cart, setCart }) => {
  const handleCheckout = () => {
    alert('Checkout completed!'); // Placeholder for checkout process
    setCart([]); // Clear the cart after checkout
  };

  // Inline styles
  const styles = {
    container: {
      width: '80%',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    heading1: {
      textAlign: 'center',
      color: '#333',
      fontSize: '2.2em',
      marginBottom: '20px',
    },
    heading2: {
      fontSize: '1.8em',
      marginBottom: '15px',
      color: '#555',
    },
    paragraph: {
      fontSize: '1.1em',
      color: '#777',
      textAlign: 'center',
    },
    cartList: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      marginBottom: '20px',
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px',
      backgroundColor: '#fff',
      marginBottom: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    },
    cartItemText: {
      fontSize: '1.2em',
      color: '#333',
    },
    checkoutButton: {
      display: 'block',
      width: '100%',
      padding: '15px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      fontSize: '1.2em',
      cursor: 'pointer',
      textAlign: 'center',
      transition: 'background-color 0.3s ease',
    },
    checkoutButtonHover: {
      backgroundColor: '#218838',
    },
    emptyCartMessage: {
      textAlign: 'center',
      fontSize: '1.3em',
      color: '#999',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>Checkout</h1>
      {cart.length === 0 ? (
        <p style={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        <div>
          <h2 style={styles.heading2}>Your Cart</h2>
          <ul style={styles.cartList}>
            {cart.map((item, index) => (
              <li key={index} style={styles.cartItem}>
                <span style={styles.cartItemText}>{item.name}</span>
                <span style={styles.cartItemText}>${item.price}</span>
              </li>
            ))}
          </ul>
          <button
            style={styles.checkoutButton}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.checkoutButtonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.checkoutButton.backgroundColor)}
            onClick={handleCheckout}
          >
            Complete Purchase
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
