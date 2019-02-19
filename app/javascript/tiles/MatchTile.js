import React from "react";
import DataMainTile from './MatchSelectorTile';
import PricingChartTile from './PricingChartTile'
import MoreDetailsTile from './MoreDetailsTile'
import ProductImageTile from './ProductImageTile'
import MainDataTile from './MainDataTile'
import MatchDataTile from './MatchDataTile'

const MatchTile = props => {

  let openWindow = (open) => { 
    window.open(props.prod_url,'_blank','width=600,height=600,top=400,left=100')
  }

  let main_data_class = "data-box-hide"
  let more_details_class = "data-box-hide"
  let latest_crawl_class = "data-box-hide"
  let match_data_class = "data-box-hide"

  let main_data_button = ""
  let more_details_button = ""
  let latest_crawl_button = ""
  let match_data_button = ""

  if (props.visible_div == "main-data") {
    main_data_class = "data-box-show"
    main_data_button = "selected-button"
  } else if (props.visible_div == "more-details") {
    more_details_class = "data-box-show"
    more_details_button = "selected-button"
  } else if (props.visible_div == "latest-crawl") {
    latest_crawl_class = "data-box-show"
    latest_crawl_button = "selected-button"
  } else if (props.visible_div == "match-data") {
    match_data_class = "data-box-show"
    match_data_button = "selected-button"
  }


  return (
    <div className={props.box_style}>
      <div className="row">
        <ProductImageTile 
          image_hover={props.image_hover}
          main_image={props.static_data.main_image} 
        />
      </div>
      <br />
      <div className="row">
        <div className="medium-12 columns">
          <div className={`data-box main-data ${main_data_class}`} id="hide-scroll">
            <MainDataTile
              reatailer_img={props.reatailer_img}
              static_data={props.static_data}
              openWindow={openWindow}
            />
          </div>
          <div className={`data-box more-details ${more_details_class}`} id="hide-scroll">
            <MoreDetailsTile 
              static_data={props.static_data}
            />
          </div>
          <div className={`data-box latest-crawl ${latest_crawl_class}`} id="hide-scroll">
            <PricingChartTile 
              data={props.dynamic_data}/>
          </div>
          <div className={`data-box match-data ${match_data_class}`} id="hide-scroll">
            <MatchDataTile
              match_data={props.match_data}
            />
          </div>
        </div>
      </div> 
      <div className="row">
        <div className="medium-12 columns">
          <div id="main-data" className={`data-button main-data medium-3 columns ${main_data_button}`} onClick={props.handleClick}>Main Data
          </div>
          <div id="more-details" className={`data-button more-details medium-3 columns ${more_details_button}`} onClick={props.handleClick}>More Data
          </div>
          <div id="latest-crawl" className={`data-button latest-crawl medium-3 columns ${latest_crawl_button}`} onClick={props.handleClick}>Price History
          </div>
          <div id="match-data" className={`data-button match-data medium-3 columns ${match_data_button}`} onClick={props.handleClick}>Match Details
          </div>
        </div>
      </div>
    </div>
  );
};
export default MatchTile;
