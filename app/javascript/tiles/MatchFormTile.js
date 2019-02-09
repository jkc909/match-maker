import React, { Component } from "react";

class MatchFormTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          comment: "",
          status: false
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
    }

    handleChange(event){
      this.setState({[event.target.name]: event.target.value })
    }

    handleCheckbox(event){
      this.setState({[event.target.name]: event.target.checked })
    }

    render() {

      let handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({comment:"", status: false})
      }

      return(
        <div className='row'>
          <div className='small-12 panel'>
            <h2>Review this Match:</h2> <br />
            <form onSubmit={handleSubmit}>
              <label name='comment'>Comment on this match:</label>
              <textarea name='comment' value={this.state.comment} onChange={this.handleChange}></textarea>

              <label name='status'>No Matches found for this product:</label> 
              <input name='status' type="checkbox" value={this.state.status} onClick={this.handleCheckbox} />s
              <input className="button submit" type='submit' value='Submit Match Review'></input><p> </p>
            </form>
          </div>
        </div>
      )
    }
}

export default MatchFormTile;
