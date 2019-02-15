import React from "react";

const MatchTabTile = props => {

	let match_display = props.tab_id + 1

  return (
		  <div className={props.selected_style}>
		  <div className="on-top" id={props.tab_id}  onClick={props.handleClickMatch}>{match_display}</div>
		  </div>
  );
};
export default MatchTabTile;

