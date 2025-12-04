import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    // A home-kontener-nek továbbra is szüksége van magasságra és position: relative-re!
    <div className="home-kontener">
        <h1>Menetrend</h1>
    </div>
  );
}

export default Home;