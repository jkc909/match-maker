import React, { Component } from "react";
import MatchTile from '../tiles/MatchTile'


class MatchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      static_data: {},
      dynamic_data: [],
      match_data: {},
      prod_url: "",
      main_data: 1,
      visible_div: 'main-data',
      box_position: null
    };
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({
      static_data: this.props.static_data,
      dynamic_data: this.props.dynamic_data,
      match_data: this.props.match_data,
      prod_url: this.props.prod_url,
      visible_div: this.props.right_data_box,
      box_position: this.props.box_position
    })
  }

  handleClick(event) {
    this.setState({visible_div: event.target.id})
    this.props.handleClickSaveState(event.target.id)
  }   

  render() {
    let image_hover
    let reatailer_img
    if (this.state.box_position == 1) {
      image_hover = "product-image-right"
      reatailer_img = "http://www.seeklogovector.com/wp-content/uploads/2018/09/sweetwater-logo-vector.png"
    } else {
      image_hover = "product-image"
      reatailer_img = "http://g-ec2.images-amazon.com/images/G/01/social/api-share/amazon_logo_500500._V323939215_.png"
    }

    return (
      <div>
        <MatchTile 
          static_data= {this.state.static_data}
          dynamic_data={this.state.dynamic_data}
          match_data={this.state.match_data}
          prod_url={this.state.prod_url}
          handleClick={this.handleClick}
          visible_div={this.state.visible_div}
          image_hover={image_hover}
          reatailer_img={reatailer_img}
        />
      </div>
    );
  }
}

export default MatchContainer;