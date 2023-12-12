import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div  className="menuItem">
      
       <img className="img" src={image} alt={name}/> 
      <h1 > {name} </h1>
      <p> ${price} </p>
      </div>
  );
}

export default MenuItem;