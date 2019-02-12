import React from "react";
import MatchTabTile from './MatchTabTile'

const MatchSelectorTile = props => {



	let match_count = props.match_count
	let id_counter = -1
	let selected_match = props.selected_match
	let matchTabTiles = match_count.map(mat => {

		id_counter ++
		let selected_style = ''
		if (selected_match == id_counter) {
			selected_style = "match-select match-selected"
		} else {
			selected_style = "match-select"
		}


		return(
			<MatchTabTile 
			key={id_counter}
			selected_style={selected_style}
			handleClickMatch={props.handleClickMatch}
			tab_id={id_counter}
			/>
			)
		
	})


	// debugger;

	// http://localhost:3000/statics/150
	
	let mat0 = "match-select"
	let mat1 = "match-select"
	let mat2 = "match-select"
	let mat3 = "match-select"
	let mat4 = "match-select"


	if (props.selected_match == 0) {
		mat0 = mat0 + "match-select match-selected"
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
		{matchTabTiles}
		</div>
  );
};
export default MatchSelectorTile;