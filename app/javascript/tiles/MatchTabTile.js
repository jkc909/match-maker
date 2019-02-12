import React from "react";

const MatchTabTile = props => {

  return (
		  <div className={props.selected_style} id={props.tab_id} onClick={props.handleClickMatch}>
		    Match1
		  </div>
  );
};
export default MatchTabTile;

