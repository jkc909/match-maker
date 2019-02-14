import React from "react";

const ProductImageTile = props => {



  return (
    <div className={props.image_hover} id="hidden-scroll">
      <img  src={props.main_image} />
    </div>

  );
};
export default ProductImageTile;
