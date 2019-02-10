import React, { Component } from "react";

import MatchContainer from './MatchContainer'
import MatchFormTile from '../tiles/MatchFormTile'

class MatchesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_projects: {},
      base_prod: 0,
      match_prods: {},
      selected_match: 0
    };
    this.fetchUserData = this.fetchUserData.bind(this)
    this.fetchMatchData = this.fetchMatchData.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.updateMatch = this.updateMatch.bind(this)
  }

  componentDidMount() {
    if (this.state.base_prod == 0) {
      let id = this.props.params.id;
      this.fetchMatchData(id)
    } else {
      let id = this.state.base_prod
      this.fetchMatchData(id)
    }
  }


  fetchUserData(id){
    fetch(`/api/v1/users/${id}`)
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

        this.fetchMatchData(body.static_id)
      })
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
          user_id: body.static.user_projects[0].user_id,
          user_projects: body.static.user_projects,
          base_prod: body.static.base_prod,
          match_prods: body.static.match_prods,
          selected_match: body.static.match_prods[0].mat.id
        });
      window.history.pushState("", "Title", `/statics/${body.static.base_prod.sta.id}`)
      })
  }

  updateMatch(match) {
    fetch(`/api/v1/matches/${this.state.selected_match}`, {
      method: 'PATCH',
      body: JSON.stringify(match),
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
      this.setState({base_prod: body.static_id})
      if (body == null) {
        window.location.href = '/'
      }
      debugger;
      window.history.pushState("", "Title", `/statics/${body.static_id}`)
    })
    .catch(error => {
      
      console.error(`Error in fetch: ${error.message}`),
      alert("there was a problem with the submission")
    });
  }

  handleSubmit(event) {
    this.updateMatch(event)
  } 




  render() {

    if(this.state.base_prod != 0) {

      return (
        <div>
          <div className="row">
          <br />
            <div className="small-centered medium-centered large-centered column">
              <div className='small-6 medium-6 large-6 column'>
              <img src='http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png' className='retailer-image' />
                <MatchContainer 
                  key={this.state.base_prod.sta.id}
                  static_data={this.state.base_prod.sta}
                  dynamic_data={this.state.base_prod.dyn}
                />
              </div>
              <div className='small-6 medium-6 large-6 column'>
              <img src='http://www.seeklogovector.com/wp-content/uploads/2018/09/sweetwater-logo-vector.png' className='retailer-image' />
              
                <MatchContainer 
                  key={this.state.match_prods[0].mat.id}
                  static_data={this.state.match_prods[0].sta}
                  dynamic_data={this.state.match_prods[0].dyn}
                />
              </div>
            </div>
          </div>
          <br />
          <MatchFormTile 
            handleSubmit={this.handleSubmit}/>
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