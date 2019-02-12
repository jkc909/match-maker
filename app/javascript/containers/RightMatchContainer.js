import React, { Component } from "react";
import MatchTile from '../tiles/MatchTile'
import RightMatchTile from '../tiles/RightMatchTile'


class RightMatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_match: false,
      dynamic_data: {},
      main_data: 1,
      visible_div: 'main-data'
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleClickMatch = this.handleClickMatch.bind(this)
  }



  componentDidMount() {

  }


  handleClick(event) {
    this.setState({visible_div: event.target.id})
  }   



  render() {


    let matches = []
    if (this.props.matches) {
      matches = this.props.matches
    }

    
    let matchTiles = matches.map(match => {
      let visible_match = false
      if (match.id == this.state.selected_match) {
        visible_match = true
      }
      return(
        <RightMatchTile 
          match_data={match.mat}
          static_data={match.sta}
          dynamic_data={match.dyn}
          visible_match={visible_match}
          handleClick={this.handleClick}
          visible_div={this.state.visible_div}
        />
      )
    })

    return (
      <div>
      <div>
      {matchTiles[0]}
      </div>



      </div>
    );
  }
}

export default RightMatchContainer;