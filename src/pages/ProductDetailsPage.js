import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductDetailsPage.css'; // Import your CSS file

const ProductDetailsPage = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        console.log(response);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="product-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">
          {product.map((item) => (
            <div key={item.id} className="product-card">
              <h3>Title: {item.title}</h3>
              <p>Price: ${item.price}</p>
              <img src={item.image} alt={item.title} />
              <p>Category: {item.category}</p>
              <p>Rating: {item.rating.rate}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
