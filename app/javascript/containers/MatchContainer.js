import React, { Component } from "react";
import MatchTile from '../tiles/MatchTile'


class MatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_data: {},
      dynamic_data: {},
      main_data: 1,

    };
  }

  componentDidMount() {
    this.setState({
      static_data: this.props.static_data,
      dynamic_data: this.props.dynamic_data
    })
  }


  handleSubmit() {
    let review = { review: this.state.review}
    this.updateReview(review)
  }   

  render() {

    return (
      <div>
      <MatchTile 
      static_data= {this.state.static_data}
      />
      </div>
    );
  }
}

export default MatchContainer;