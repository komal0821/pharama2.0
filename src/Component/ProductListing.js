import React, { useState, useEffect } from 'react';
import './Product.css'; // Import Product.css for product styling
import './ProductListening.css'; // Import ProductListening.css for product listing styling

const Product = ({ id, name, description, price, imageUrl, category, onAddToCart }) => {
  const handleAddToCart = () => {
    const userLocation = window.prompt('Please enter your location:');
    if (userLocation) {
      // Notify the user about the order confirmation
      if ('Notification' in window && Notification.permission === 'granted') {
        new Notification('Order Confirmed!', {
          body: `Your order for ${name} has been placed at ${userLocation}.`,
        });
      }
    } else {
      // Show an error message if the user cancels the prompt
      alert('Order not placed. Please provide your location.');
    }
  };

  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">₹{price}</p>
        <p className="product-category">Category: {category}</p>
        <button className="product-buy-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Request notification permission on component mount
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Sample products data
  const products = [
    { id: 1, name: 'Paracetamol', description: 'Fever Relief', price: 30, imageUrl: 'paracetamol.jpg', category: 'Fever' },
    { id: 2, name: 'Digestive Enzymes', description: 'Digestive Problem Solution', price: 25, imageUrl: 'digestive.jpg', category: 'Digestive Problem' },
    { id: 3, name: 'Antiseptic Cream', description: 'Wound Care', price: 40, imageUrl: 'antiseptic.jpg', category: 'Wound' },
    { id: 4, name: 'Bandages Pack', description: 'First Aid Bandages', price: 15, imageUrl: 'bandages.jpg', category: 'Wound' },
    { id: 5, name: 'Cold Relief Syrup', description: 'Cold and Cough Relief', price: 35, imageUrl: 'cold-syrup.jpg', category: 'Fever' },
    { id: 6, name: 'Digestive Tea', description: 'Digestive Tea Blend', price: 20, imageUrl: 'digestive-tea.jpg', category: 'Digestive Problem' },
    // ... more products
  ];

  const filteredProducts = products.filter(product =>
    (selectedCategory === 'All' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ['All', 'Fever', 'Digestive Problem', 'Wound'];

  return (
    <div className="container">
      <h1>Healthcare Products</h1>
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
