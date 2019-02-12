import React from "react";

const MatchSelectorTile = props => {
	
	let mat0 = "match-select"
	let mat1 = "match-select"
	let mat2 = "match-select"
	let mat3 = "match-select"
	let mat4 = "match-select"


	if (props.selected_match == 0) {
		mat0 = mat0 + " match-selected"
	} else if (props.selected_match == 1) {
		mat1 = mat1 + " match-selected"
	} else if (props.selected_match == 2) {
		mat2 = mat2 + " match-selected"
	} else if (props.selected_match == 3) {
		mat3 = mat3 + " match-selected"
	} else if (props.selected_match == 4) {
		mat4 = mat4 + " match-selected"
	}

  return (
		<div className="match-selector">
		  <div className={mat0} id={0} onClick={props.handleClickMatch}>
		    Match1
		  </div>
		  <div className={mat1} id={1} onClick={props.handleClickMatch}>
		    Match2
		  </div>
		  <div className={mat2} id={2} onClick={props.handleClickMatch}>
		    Match3
		  </div>
		  <div className={mat3} id={3} onClick={props.handleClickMatch}>
		    Match4
		  </div>
		  <div className={mat4} id={4} onClick={props.handleClickMatch}>
		    Match5
		  </div>
		</div>
  );
};
export default MatchSelectorTile;