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
        <a href="/">Back to user page</a>
        <div className="align-right">
            <form onSubmit={handleSubmit}>
          <div className='small-10 medium-10 large-10 columns'>
              <label name='comment'>Comment on this match:</label>
              <textarea className="comment-text" name='comment' value={this.state.comment} onChange={this.handleChange}></textarea>
          </div>
            <div className='small-2 medium-2 large-2 columns'>
              <div id="false" onMouseEnter={this.handleHoverState}>
              <input className="button submit" type='submit' value='No Match Found' id="false"></input>
              </div>
          <div id="true" onMouseEnter={this.handleHoverState}>
              <input className="button submit" type='submit' value='Confirm Match' id="true" ></input>
            </div>
          </div>
            </form>  
          </div>
        </div>
      )
    }
}

export default MatchFormTile;
