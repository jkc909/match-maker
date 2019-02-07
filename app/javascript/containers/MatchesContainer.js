import React, { Component } from "react";

import MatchContainer from './MatchContainer'
import MatchFormTile from '../tiles/MatchFormTile'

class MatchesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      match: {},
      left_product_static: {},
      left_product_dynamic: {},
      right_product_static: {},
      right_product_dynamic: {}
    };
    this.fetchMatchData = this.fetchMatchData.bind(this)
  }

  componentDidMount() {
    let id = this.props.params.id;
    this.fetchMatchData(id)
  }


  fetchMatchData(id){
    fetch(`/api/v1/matches/${id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage);
          throw error;
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ 
          match: body.match,
          left_product_static: body.left_product_static,
          left_product_dynamic: body.left_product_dynamic,
          right_product_static: body.right_product_static,
          right_product_dynamic: body.right_product_dynamic
        });
      })
  }


  render() {

    return (
      <div>
        <div className="row">
        <br />
          <div className="small-centered medium-centered large-centered column">
            <div className='small-6 medium-6 large-6 column'>
              <MatchContainer 
                key={this.state.left_product_static.id}
                static_data={this.state.left_product_static}
                dynamic_data={this.state.left_product_dynamic}
              />
            </div>
            <div className='small-6 medium-6 large-6 column'>
              <MatchContainer 
                key={this.state.right_product_static.id}
                static_data={this.state.right_product_static}
                dynamic_data={this.state.right_product_dynamic}
              />
            </div>
          </div>
        </div>
        <br />
        <MatchFormTile />
      </div>
    );
  }
}

export default MatchesContainer;