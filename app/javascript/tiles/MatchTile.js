import React from "react";

const MatchTile = props => {

  return (
    <div className="product-container">
      <h4> {props.static_data.product_name} </h4>
      <div className="product-image">
      <img  src={props.static_data.main_image} />
      </div>
      <p>  </p>



      <div className="">
      <p> 
      <h4>URL:</h4> 
      </p>
      <p>
      <h4>Brand:</h4>
      {props.static_data.brand}
      </p>
      <p>
      <h4>Part Number:</h4>
      {props.static_data.part_number}
      </p>
      </div>

      <div className="main-data data-box-hide">
      <p> 
      <h4>URL:</h4> 
      </p>
      <p>
      <h4>Brand:</h4>
      {props.static_data.brand}
      </p>
      <p>
      <h4>Part Number:</h4>
      {props.static_data.part_number}
      </p>
      </div>

    </div>
  );
};

export default MatchTile;
