import React from 'react'
import '../styles/Home.css'
import BannerImage from "../assests/pizza.jpeg";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
     <div className="headerContainer" >
        <h1> Pedro's Pizzeria </h1>
        <p> PIZZA TO FIT ANY TASTE</p>
        <a to="/menu">
          <button> ORDER NOW </button>
        </a>
      </div>
    </div>
  )
}

export default Home