import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import { Carousel } from 'react-responsive-carousel';
import './Product.css'; // Import your CSS file for styling

function Product({ name, description, price, imageUrl }) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <p className="product-price">₹{price}</p>
        <button className="product-buy-button">Buy Now</button>
      </div>
    </div>
  );
}

function ProductListing() {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'DOLO',
      description: ' used Fever',
      price: 20,
      imageUrl: '/medicine-bottle-spilling-colorful-pills-depicting-addiction-risks-generative-ai_188544-12529.avif',
    },
    {
      id: 2,
      name: 'paracetamol-500',
      description: 'fever, headche,pain',
      price: 24.99,
      imageUrl: 'Diptamp-500-scaled.jpg',
    },
    {
      id: 2,
      name: 'Pudin hara',
      description: 'digestion problem',
      price: 24.99,
      imageUrl: '81rkz2TDltL.jpg',
    },
    {
      id: 2,
      name: 'ENO liquid',
      description: 'digestion &acidity',
      price: 24.99,
      imageUrl: '/afaqs_2022-06_f6221aaf-0156-48d1-aebf-cb94fd902ed4_ENO.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 24.99,
      imageUrl: '/eno-regular-antacid-sachet-of-5-g-2-1671741390.webp',
    },
    // ... (other products)
  ];
  

  return (
    <div>
      <h1> Our Popular Products</h1>
      <Carousel infiniteLoop showArrows>
        {products.map((product) => (
          <div key={product.id}>
            <Product
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ProductListing;
