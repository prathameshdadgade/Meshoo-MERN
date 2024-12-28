import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductsForYou from './components/ProductsForYou'; 
import TopCategories from './components/TopCategories';
import Navigation from './components/Navigation';
import Header from './components/Header';
import LowestPrices from './components/LowestPrices';
import Signup from './components/Signup';
import Login from './components/Login';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        {/* Header and Navigation */}
        <Header />
      
        <Routes>
          {/* Default Routes */}
          <Route path="/" element={
            <>
              <Navigation />
              <LowestPrices />
              <TopCategories />
              <ProductsForYou />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          {/* Signup and Login Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  </Provider>
  );
}

export default App;
