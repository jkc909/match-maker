import React from "react";

const RightMatchTile = props => {

  let visible_match = ""



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
    <div className="product-container">
      <div className="row">
      <div className="product-image" id="hide-scroll">
      <img  src={props.static_data.main_image} />
      </div>
      </div>
      <p>  </p>

      <div className="row">
      <div className="medium-12 columns">
      <div className={main_data_class} id="hide-scroll">
      <h4> {props.static_data.product_name} </h4>
      <h4>URL: http://www.google.com</h4> 
      <h4>Brand: {props.static_data.brand}</h4>
      <h4>Part Number: {props.static_data.part_number}</h4>
      </div>

      <div className={more_details_class} id="hide-scroll">
      <table>
        <tr>
          <td>Brand</td>
          <td>{props.static_data.brand}</td>
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
          <td>Part Number</td>
          <td>{props.static_data.part_number}</td>
        </tr>
        <tr>
          <td>Brand</td>
          <td>{props.static_data.brand}</td>
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
          <td>Part Number</td>
          <td>{props.static_data.part_number}</td>
        </tr>

      </table>
      </div>

      <div className={latest_crawl_class} id="hide-scroll">
      <h4>URL:</h4> 
      <h4>Brand:</h4>
      NUMBer 3 
      <h4>Part Number:</h4>
      {props.static_data.part_number}
      </div>

      <div className={match_data_class} id="hide-scroll">
      <h4>URL:</h4> 
      <h4>Brand:</h4>
      HELLO I WAS HIDDEN 
      <h4>Part Number:</h4>
      {props.static_data.part_number}
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
export default RightMatchTile;
