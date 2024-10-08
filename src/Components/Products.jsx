import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/Products.css';

const Products = ({ cart, setCart }) => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL location
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Extract search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search') || '';
    setSearchQuery(query);
  }, [location.search]);

  const products = [
    // T-Shirts
    { id: 1, name: 'Naruto T-Shirt', description: 'Cool T-shirt featuring Naruto Uzumaki.', price: 1999, image: 'https://via.placeholder.com/200x150.png?text=Naruto+T-Shirt' },
    { id: 2, name: 'One Piece T-Shirt', description: 'Stylish T-shirt with Luffy design.', price: 1999, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+T-Shirt' },
    { id: 3, name: 'My Hero Academia T-Shirt', description: 'T-shirt featuring All Might.', price: 1999, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+T-Shirt' },
    { id: 4, name: 'Attack on Titan T-Shirt', description: 'T-shirt with the Survey Corps logo.', price: 1999, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+T-Shirt' },
    { id: 5, name: 'Dragon Ball Z T-Shirt', description: 'T-shirt featuring Goku.', price: 1999, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+T-Shirt' },

    // Hoodies
    { id: 6, name: 'Naruto Hoodie', description: 'Warm hoodie with Naruto design.', price: 3999, image: 'https://via.placeholder.com/200x150.png?text=Naruto+Hoodie' },
    { id: 7, name: 'One Piece Hoodie', description: 'Stylish hoodie featuring Luffy.', price: 3999, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+Hoodie' },
    { id: 8, name: 'My Hero Academia Hoodie', description: 'Hoodie with Deku design.', price: 3999, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+Hoodie' },
    { id: 9, name: 'Attack on Titan Hoodie', description: 'Hoodie with the Scout Regiment logo.', price: 3999, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+Hoodie' },
    { id: 10, name: 'Dragon Ball Z Hoodie', description: 'Hoodie featuring Goku.', price: 3999, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+Hoodie' },

    // Posters
    { id: 11, name: 'Naruto Poster', description: 'High-quality poster of Naruto.', price: 799, image: 'https://via.placeholder.com/200x150.png?text=Naruto+Poster' },
    { id: 12, name: 'One Piece Poster', description: 'Poster featuring Luffy.', price: 799, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+Poster' },
    { id: 13, name: 'My Hero Academia Poster', description: 'Poster featuring Deku.', price: 799, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+Poster' },
    { id: 14, name: 'Attack on Titan Poster', description: 'Poster with the Titan logo.', price: 799, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+Poster' },
    { id: 15, name: 'Dragon Ball Z Poster', description: 'Poster featuring Goku.', price: 799, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+Poster' },

    // Action Figures
    { id: 16, name: 'Naruto Action Figure', description: 'Collectible action figure of Naruto.', price: 2999, image: 'https://via.placeholder.com/200x150.png?text=Naruto+Action+Figure' },
    { id: 17, name: 'One Piece Action Figure', description: 'Collectible action figure of Luffy.', price: 2999, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+Action+Figure' },
    { id: 18, name: 'My Hero Academia Action Figure', description: 'Action figure of All Might.', price: 2999, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+Action+Figure' },
    { id: 19, name: 'Attack on Titan Action Figure', description: 'Action figure of Eren Yeager.', price: 2999, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+Action+Figure' },
    { id: 20, name: 'Dragon Ball Z Action Figure', description: 'Action figure of Goku.', price: 2999, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+Action+Figure' },

    // Chains
    { id: 21, name: 'Naruto Chain', description: 'Stylish chain featuring Naruto design.', price: 1199, image: 'https://via.placeholder.com/200x150.png?text=Naruto+Chain' },
    { id: 22, name: 'One Piece Chain', description: 'Chain featuring Luffy design.', price: 1199, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+Chain' },
    { id: 23, name: 'My Hero Academia Chain', description: 'Chain with All Might design.', price: 1199, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+Chain' },
    { id: 24, name: 'Attack on Titan Chain', description: 'Chain featuring the Survey Corps logo.', price: 1199, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+Chain' },
    { id: 25, name: 'Dragon Ball Z Chain', description: 'Chain featuring Goku design.', price: 1199, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+Chain' },

    // Bags
    { id: 26, name: 'Naruto Bag', description: 'Cool bag featuring Naruto design.', price: 2499, image: 'https://via.placeholder.com/200x150.png?text=Naruto+Bag' },
    { id: 27, name: 'One Piece Bag', description: 'Stylish bag with Luffy design.', price: 2499, image: 'https://via.placeholder.com/200x150.png?text=One+Piece+Bag' },
    { id: 28, name: 'My Hero Academia Bag', description: 'Bag featuring All Might.', price: 2499, image: 'https://via.placeholder.com/200x150.png?text=My+Hero+Academia+Bag' },
    { id: 29, name: 'Attack on Titan Bag', description: 'Bag with the Survey Corps logo.', price: 2499, image: 'https://via.placeholder.com/200x150.png?text=Attack+on+Titan+Bag' },
    { id: 30, name: 'Dragon Ball Z Bag', description: 'Bag featuring Goku.', price: 2499, image: 'https://via.placeholder.com/200x150.png?text=Dragon+Ball+Z+Bag' },
  ];

  // Filter logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = filterCategory === 'All' || product.name.includes(filterCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="products-page">
      <h1>Products</h1>

      {/* Filter Section */}
      <div className="filter-section">
        <label htmlFor="filter">Filter by category: </label>
        <select
          id="filter"
          className="filter-select"
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          {/* ... other filter options */}
        </select>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} className="product-image" />
            <p>{product.description}</p>
            <p className="price">₹{product.price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
