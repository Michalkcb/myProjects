import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from './../assets/banerPizza.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`} }>
        <div className='headerContainer' >
            <h1>Luigi Pizzeria</h1>
            <p>Your Palate's Paradise</p>
            <Link to='/menu'>
            <button> ORDER NOW </button>
            </Link>
        </div>
    </div>
  );
}

export default Home