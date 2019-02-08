import React from "react";

const MatchTile = props => {

  return (
    <div className="product-container">
      <h4> {props.static_data.product_name} </h4>
      <img className="product-image" src={props.static_data.main_image} />
      <p>  </p>

      <p> 
      <h4>URL:</h4> 
      <a href="http://www.google.com">CLICK MEEEE</a> 
      </p>
    </div>
  );
};

export default MatchTile;
