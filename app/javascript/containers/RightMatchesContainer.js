import React, { Component } from "react";

import MatchTile from '../tiles/MatchTile'

class RightMatchesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_match: 0
    };
  }

  componentDidMount() {

  }

  render() {

      return (
        <div>
          <div className="row">
          <br />
            <div className="small-centered medium-centered large-centered column">
              <div className='small-6 medium-6 large-6 column'>
                <MatchContainer 
                  key={this.state.base_prod.sta.id}
                  static_data={this.state.base_prod.sta}
                  dynamic_data={this.state.base_prod.dyn}
                />
              </div>
              <div className='small-6 medium-6 large-6 column'>
                <MatchContainer 
                  key={this.state.match_prods[0].mat.id}
                  static_data={this.state.match_prods[0].sta}
                  dynamic_data={this.state.match_prods[0].dyn}
                />
              </div>
            </div>
          </div>
          <br />
          <MatchFormTile />
        </div>
      );
    }
  else {
    return(
      <div></div>
      )
  };

}

export default RightMatchesContainer;