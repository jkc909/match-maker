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

		if (selected_match==0) {
			selected_style = selected_style + ' match-select-remove-top'
		} else if (selected_match==match_count.length-1) {
			selected_style = selected_style + ' match-select-remove-bottom'
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

  return (
		<div className="match-selector">
		{matchTabTiles}
		</div>
  );
};

export default MatchSelectorTile;