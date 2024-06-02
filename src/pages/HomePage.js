import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetailsPage from './ProductDetailsPage'; // Import ProductDetailsPage

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Home Page</h1>
      <p style={{ textAlign: 'center' }}>Welcome to the home page! Go to <Link to="/product/1">Product Details</Link> page</p>
      <hr />
      <ProductDetailsPage /> {/* Render ProductDetailsPage */}
    </div>
  );
};

export default HomePage;
