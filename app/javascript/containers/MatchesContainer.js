import React, { Component } from "react";

import MatchContainer from './MatchContainer'
import MatchFormTile from '../tiles/MatchFormTile'

class MatchesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_projects: {},
      base_prod: 0,
      match_prods: {}
    };
    this.fetchMatchData = this.fetchMatchData.bind(this)
  }

  componentDidMount() {
    let id = this.props.params.id;
    this.fetchMatchData(id)

  }


  fetchMatchData(id){
    fetch(`/api/v1/statics/${id}`)
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
          user_projects: body.static.user_projects,
          base_prod: body.static.base_prod,
          match_prods: body.static.match_prods
        });
      })
  }


  updateReview(review) {
    fetch(`/api/v1/reviews/${this.state.review.id}`, {
      method: 'PATCH',
      body: JSON.stringify(review),
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`, error = new Error(errorMessage)
        throw (error)
      }
    })
    .then(response => response.json())
    .then(body => {
      let rev = this.state.review
      rev.rating = body.rating
      rev.comment = body.comment
      this.setState({review: rev, edit: false})
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`),
      alert("there was a problem with the submission")
    });
  }

  handleSubmit() {
    let review = { review: this.state.review}
    this.updateReview(review)
  } 


  render() {

    if(this.state.base_prod != 0) {

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
}

export default MatchesContainer;