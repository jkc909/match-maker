import React from "react";

const MatchTile = props => {

  return (
    <div className="product-container">
      <p> Hiyeeee from the MatchTile </p>
      <img src={props.static_data.main_image} />
      <p> <h4>Product Name:</h4> {props.static_data.product_name} </p>

      <p> 
      <h4>URL:</h4> 
      <a href="http://www.google.com">CLICK MEEEE</a> 
      </p>
    </div>
  );
};

export default MatchTile;
