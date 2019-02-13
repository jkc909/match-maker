import React from "react";
import DataMainTile from './MatchSelectorTile';

const MatchTile = props => {



  let openWindow = (open) => { 
    window.open(props.prod_url,'_blank','width=600,height=600,top=400,left=100')
  }

  // if (props.dynamic_data[0]) {
  // let prod_price = props.dynamic_data[0].price
  // }

  let main_data_class = "data-box main-data data-box-hide"
  let more_details_class = "data-box more-details data-box-hide"
  let latest_crawl_class = "data-box latest-crawl data-box-hide"
  let match_data_class = "data-box match-data data-box-hide"

  let main_data_button = "data-button main-data medium-3 columns"
  let more_details_button = "data-button more-details medium-3 columns"
  let latest_crawl_button = "data-button latest-crawl medium-3 columns"
  let match_data_button = "data-button match-data medium-3 columns"

  if (props.visible_div == "main-data") {
    main_data_class = "data-box main-data data-box-show"
    main_data_button = "data-button main-data selected-button medium-3 columns"
  } else if (props.visible_div == "more-details") {
    more_details_class = "data-box more-details data-box-show"
    more_details_button = "data-button more-details selected-button medium-3 columns"
  } else if (props.visible_div == "latest-crawl") {
    latest_crawl_class = "data-box latest-crawl data-box-show"
    latest_crawl_button = "data-button latest-crawl selected-button medium-3 columns"
  } else if (props.visible_div == "match-data") {
    match_data_class = "data-box match-data data-box-show"
    match_data_button = "data-button match-data selected-button medium-3 columns"
  }


  return (
    <div className={props.box_style}>
    
      <div className="row">
      <div className={props.image_hover} id="hidden-scroll">
      <img  src={props.static_data.main_image} />
      </div>
      </div>
      <p>  </p>

      <div className="row">
      <div className="medium-12 columns">


      <div className={main_data_class} id="hide-scroll">

      <div className="row">

      <div className="small-3 medium-3 large-3 columns">
        <img src={props.reatailer_img} className='retailer-image'/>
      </div>

      <div className="small-9 medium-9 large-9 columns">
        <h4> 
          <a onClick={openWindow}>{props.static_data.product_name}</a> 
        </h4>
        <h4>Brand: {props.static_data.brand}</h4>
        <h4>Part Number: {props.static_data.part_number}</h4>
      </div>

        </div>


      </div>






      <div className={more_details_class} id="hide-scroll">
      <table className='data-tile-table'>
        <tbody>
          <tr>
            <td>Product Name</td>
            <td>{props.static_data.product_name}</td>
          </tr>
          <tr>
            <td>Part Number</td>
            <td>{props.static_data.part_number}</td>
          </tr>
          <tr>
            <td>Brand</td>
            <td>{props.static_data.brand}</td>
          </tr>
          <tr>
            <td>Breadcrumb</td>
            <td>{props.static_data.Breadcrumb}</td>
          </tr>
          <tr>
            <td>Child Identifier</td>
            <td>{props.static_data.child_identifier}</td>
          </tr>
          <tr>
            <td>Parent Identifier</td>
            <td>{props.static_data.parent_identifier}</td>
          </tr>
          <tr>
            <td>Image Count</td>
            <td>{props.static_data.image_count}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{props.static_data.description}</td>
          </tr>


          <tr>
            <td>Shipping Weight</td>
            <td>{props.static_data.shipping_weight} {props.static_data.shipping_weight_unit}</td>
          </tr>

          <tr>
            <td>Date First Available</td>
            <td>{props.static_data.first_available}</td>
          </tr>

          <tr>
            <td>Item Weight</td>
            <td>{props.static_data.item_weight} {props.static_data.item_weight_unit}</td>
          </tr>


          <tr>
            <td>Dimensions</td>
            <td>{props.static_data.dimensions} {props.static_data.dimensions_unit}</td>
          </tr>


          <tr>
            <td>Best Seller 1</td>
            <td>{props.static_data.best_seller_1}</td>
          </tr>


          <tr>
            <td>Best Seller 2</td>
            <td>{props.static_data.best_seller_2}</td>
          </tr>


          <tr>
            <td>Best Seller 3</td>
            <td>{props.static_data.best_seller_3}</td>
          </tr>          

        </tbody>
      </table>
      </div>


    



      <div className={latest_crawl_class} id="hide-scroll">
      <h4>Crawl Data</h4> 
      <h4>Last Crwal Date</h4>
      NUMBer 3 
      <h4>Price</h4>
      {props.dynamic_data.prod_price}
      </div>

      <div className={match_data_class} id="hide-scroll">
      <h4>Match Data</h4> 
      <h5>Average Score: {props.match_data.average_score}</h5>
      <h5>Manufacturer Score: {props.match_data.manufacturer_score}</h5>
      <h5>Part Number Score: {props.match_data.part_number_score}</h5>
      <h5>Price Score: {props.match_data.price_score}</h5>
      
      </div>
      </div>
      </div>


      <div className="data-buttons row">

      <div id="main-data" className={main_data_button} onClick={props.handleClick}>Main Data</div>
      <div id="more-details" className={more_details_button} onClick={props.handleClick}>More Data</div>
      <div id="latest-crawl" className={latest_crawl_button} onClick={props.handleClick}>Latest Crawl</div>
      <div id="match-data" className={match_data_button} onClick={props.handleClick}>Match Details</div>
      </div>


    </div>
  );
};
export default MatchTile;
