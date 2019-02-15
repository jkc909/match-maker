import React, { Component } from "react";

import MatchContainer from './MatchContainer'
import MatchFormTile from '../tiles/MatchFormTile'
import MatchSelectorTile from '../tiles/MatchSelectorTile'

class MatchesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_projects: {},
      base_prod: 0,
      match_prods: {},
      selected_match: 0,
      right_data_box: 'main-data',
      visible_tab: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateMatch = this.updateMatch.bind(this);
    this.fetchMatchData = this.fetchMatchData.bind(this);
    this.handleClickMatch = this.handleClickMatch.bind(this);
    this.handleClickSaveState = this.handleClickSaveState.bind(this);
  }

  componentDidMount() {
    if (this.state.base_prod == 0) {
      let id = this.props.params.id;
      this.fetchMatchData(id)
    }
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
          selected_match: body.static.match_prods[0]
        })
        window.history.pushState("", "MatchMaker<3", `/statics/${body.static.base_prod.sta.id}`)
      })
  }

  updateMatch(match_update){
    fetch(`/api/v1/statics/${this.state.selected_match.sta.id}`, {
      method: 'PATCH',
      body: JSON.stringify(match_update),
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
        if (body.static == "none") {
          window.location.href = '/'
        } else { 
        this.setState({
          user_id: body.static.user_projects[0].user_id,
          user_projects: body.static.user_projects,
          base_prod: body.static.base_prod,
          match_prods: body.static.match_prods,
          selected_match: body.static.match_prods[0],
          right_data_box: 'main-data',
          visible_tab: 0
        })      
        window.history.pushState("", "MatchMaker<3", `/statics/${body.static.base_prod.sta.id}`) 
        } 
      })

      .catch(error => {
        console.error(`Error in fetch: ${error.message}`),
        alert("there was a problem with the submission")
      }); 
  }





  handleClickMatch(event) {
    this.setState({
      selected_match: this.state.match_prods[event.target.id],
      visible_tab: event.target.id
    })
  }   

  handleClickSaveState(event) {
    this.setState({
      right_data_box: event
    })
  } 


  handleSubmit(formPayLoad){
    let match_update = {}
    match_update.match_id = this.state.selected_match.mat.id
    match_update.approved = formPayLoad.status
    match_update.comment = formPayLoad.comment
    match_update.static_id = this.state.base_prod.sta.id
    this.updateMatch(match_update)
  } 

  render() {

    if(this.state.base_prod != 0) {

      return (
        <div>
          <div className="row">
          <br />
            <div className="small-centered medium-centered large-centered column main-tile-container">
              <div className='small-6 medium-6 large-6 column product-container-right animate-match'>
              
                <MatchContainer 
                  key={this.state.base_prod.sta.id}
                  static_data={this.state.base_prod.sta}
                  dynamic_data={this.state.base_prod.dyn}
                  match_data={this.state.selected_match.mat}
                  prod_url={this.state.base_prod.url}
                  handleClickSaveState={this.handleClickSaveState}
                  right_data_box={this.state.right_data_box}
                  box_position={0}             
                />
              </div>
              <div className='small-6 medium-6 large-6 column animate-match-right'>
              
              
                <MatchContainer 
                  key={this.state.selected_match.sta.id}
                  static_data={this.state.selected_match.sta}
                  dynamic_data={this.state.selected_match.dyn}
                  match_data={this.state.selected_match.mat}
                  prod_url={this.state.selected_match.url}
                  handleClickSaveState={this.handleClickSaveState}
                  right_data_box={this.state.right_data_box}
                  match_data={this.state.selected_match.mat}
                  box_position={1}
                />


              </div>
              <div className="match-selector animate-match-right">
                <MatchSelectorTile 
                  handleClickMatch={this.handleClickMatch}
                  selected_match={this.state.visible_tab}
                  match_count={this.state.match_prods}
                />
                </div>
              </div>
          </div>
            <div className='form-container'>
              <MatchFormTile 
                handleSubmit={this.handleSubmit}/>
            </div>


<div className="match-confirm-check">
<img src="http://www.clker.com/cliparts/2/k/n/l/C/Q/transparent-green-checkmark-md.png"  /> <h1>Match Confirmed! </h1>
</div>

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