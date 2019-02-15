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
        this.setState({comment:"", status: false})
      }

      return(
        <div className='row'>

<div className='small-3 medium-3 large-3 columns'>
        <a href="/">Back to user page</a>
</div>


            <form onSubmit={handleSubmit}>
        <div className='small-3 medium-3 large-3 columns'>
              <label name='comment'>Comment on this match:</label>
              <textarea className="comment-text drop-shadow" name='comment' value={this.state.comment} onChange={this.handleChange}></textarea>
          </div>
            <div className='small-3 medium-3 large-3 columns submit-buttons'>
              <div id="false" onMouseEnter={this.handleHoverState}>
                <input className="button submit submit-button submit-no-match drop-shadow" type='submit' value='No Match Found' id="false"></input>
              </div>
            </div>
            <div className='small-3 medium-3 large-3 columns submit-buttons'>  
          <div id="true" onMouseEnter={this.handleHoverState}>
              <input className="button submit submit-button submit-match-found drop-shadow" type='submit' value='Confirm Match' id="true" ></input>
            </div>
          </div>
            </form>  







        </div>
      )
    }
}

export default MatchFormTile;
