import React, { Component } from "react";

class MatchFormTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comment: ""
        };

        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
      this.setState({[event.target.name]: event.target.value })
    }

    render() {
      let handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({comment:""})
      }
      return(
        <div className='row'>
          <div className='small-12 panel'>
            <h2>Review this Match:</h2> <br />
            <form onSubmit={handleSubmit}>

              <label name='comment'>Answer:</label>
              <textarea name='comment' value={this.state.comment} onChange={this.handleChange}></textarea>
              <input className="button submit" type='submit' value='Submit'></input>
            </form>
          </div>
        </div>
      )
    }
}

export default MatchFormTile;
