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
    let box_style ="product-container"
    let image_hover
    let reatailer_img
    if (this.state.box_position == 1) {
      image_hover = "product-image-right"
      reatailer_img = "https://bluepolointeractive.com/wp-content/uploads/2018/03/980x575-swlogo-color-tagline-980x575-1.png"
    } else {
      image_hover = "product-image"
      reatailer_img = "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c518.png"
      box_style = 'product-container product-container-left'
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
          box_style={box_style}
        />
      </div>
    );
  }
}

export default MatchContainer;