import React from "react";

const MainDataTile = props => {

	let match_display = props.tab_id + 1

  return (
		<div className="row">
		  <div className="small-3 medium-3 large-3 columns">
		    <img src={props.reatailer_img} className='retailer-image'/>
		  </div>
		  <div className="small-9 medium-9 large-9 columns">
		    <div className="data-tile-prod-name" id="hide-scroll">
			    <h4><a onClick={props.openWindow}>{props.static_data.product_name}</a></h4>
			  </div>
			    <h5>Brand: {props.static_data.brand}</h5>
			    <h5>Part Number: {props.static_data.part_number}</h5>
		  </div>
		</div>
  );
};
export default MainDataTile;

