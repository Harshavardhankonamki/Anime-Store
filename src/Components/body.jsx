import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Body.css';

const Body = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const h1 = document.querySelector('.animated-h1');
    const text = h1.textContent;
    h1.innerHTML = text.split(' ').map((char, index) =>
      `<span style="animation-delay:${index * 0.2}s">${char}</span>`
    ).join(' ');
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery.trim()}`);
    }
  };

  return (
    <div className="cont">
      <section className="body-section">
        <div className="body-text">
          <h1 className="animated-h1">Welcome to AnimeStore</h1>
          <h3 className="subtitle">Find Your Favorite Merchandise</h3>

          {/* Search Bar Container */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for products..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-btn" onClick={handleSearch}>
              Search
            </button>
          </div>

          <p>
            Dive into the world of anime with our exclusive collection of merchandise. From stylish t-shirts to collectible figures, we have everything you need to express your love for your favorite anime series.
          </p>
          <Link to="/products">
            <button className="btn">Shop Now</button>
          </Link>
        </div>
        <div className="body-image"></div>
      </section>
    </div>
  );
};

export default Body;
