import React, { Component } from "react";

class MatchFormTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comment: "",
          status: false
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleHoverState = this.handleHoverState.bind(this)
    }

    handleChange(event){
      this.setState({[event.target.name]: event.target.value })
    }

    handleHoverState(event){
      this.setState({status: event.target.id})
    }

    render() {

      let handleSubmit = (event) => {
        event.preventDefault()
        event.target.reset()
        this.props.handleSubmit(this.state)
        this.setState({comment:""})
      }

      return(
        <div className='row'>
          <div className='small-3 medium-3 large-3 medium-center columns submit-buttons'>
            <form action="/">
              <input className="button submit submit-button drop-shadow" type='submit' value='Back to User Page'>
              </input>     
            </form>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='small-3 medium-3 large-3 medium-center columns'>
              <textarea className="comment-text drop-shadow" name='comment' value={this.state.comment} onChange={this.handleChange} placeholder="Comment on this match..."></textarea>
            </div>
            <div className='small-3 medium-3 large-3 medium-center columns submit-buttons'>
              <div id="false" onMouseEnter={this.handleHoverState}>
                <input className="button submit submit-button submit-no-match drop-shadow" type='submit' value='No Match Found' id="false"></input>
              </div>
            </div>
            <div className='small-3 medium-3 large-3 medium-center columns submit-buttons'>  
              <div id="true" onMouseEnter={this.handleHoverState}>
                <input className="button submit submit-button submit-match-found drop-shadow" type='submit' value='Confirm Match' id="true"></input>
              </div>
            </div>
          </form>  
        </div>
      )
    }
}

export default MatchFormTile;
