import React from "react";

const MatchDataTile = props => {

	let match_display = props.tab_id + 1

  return (
		<fragment>
	    <h4>Match Data</h4> 
	    <h5>Average Score: {props.match_data.average_score}</h5>
	    <h5>Manufacturer Score: {props.match_data.manufacturer_score}</h5>
	    <h5>Part Number Score: {props.match_data.part_number_score}</h5>
	    <h5>Price Score: {props.match_data.price_score}</h5>
	    <h5>Product Name Score: {props.match_data.product_name_score}</h5>
		</fragment>
  );
};
export default MatchDataTile;

