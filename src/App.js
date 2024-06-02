// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductDetailsPage from './pages/ProductDetailsPage'; // Import ProductDetailsPage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} /> {/* Add this route */}
        <Route path="*" element={<Navigate to="/login" />} />
        <Route path='/home' element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
