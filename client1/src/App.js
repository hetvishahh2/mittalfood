import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
    });
  }, []);
  

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
