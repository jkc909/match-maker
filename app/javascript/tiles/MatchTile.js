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
       
      <h4>URL:</h4> 
    
      
      <h4>Brand:</h4>
      {props.static_data.brand}
    
      
      <h4>Part Number:</h4>
      {props.static_data.part_number}
    
      </div>

      <div className="main-data data-box-hide">
       
      <h4>URL:</h4> 
    
      
      <h4>Brand:</h4>
      {props.static_data.brand}
    
      
      <h4>Part Number:</h4>
      {props.static_data.part_number}
    
      </div>

    </div>
  );
};

export default MatchTile;
