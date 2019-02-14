import React from "react";

const MoreDetailsTile = props => {


  return (
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
  );
};
export default MoreDetailsTile;
