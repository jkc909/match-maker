import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class MatchDataTile extends React.Component {
  render() {

let data = [
  ["Type", "Fuzzy Match Score", { role: "style" }],
  ["Brand", this.props.match_data.manufacturer_score, "color: blue"],
  ["Part Number", this.props.match_data.part_number_score, "color: #76A7FA"],
  ["Product Name", this.props.match_data.product_name_score, "color: gray"],
  ["Price", this.props.match_data.price_score, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "Weighted Average",
    this.props.match_data.average_score,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
]
    return (
     <div className="row"> 
     	<div className="small-10 medium-10 large-10 columns">
      <div className={'pricing-chart'}>
          <Chart
            chartType="BarChart"
            data={data}
            options={{}}
            width="100%"
            height="240px"
            legend_toggle
            loader={<div>Loading Chart</div>}
            title="Fuzzy Match Scores"
          />
      </div>
      </div>

			<div className="small-2 medium-2 large-2 columns">


<div className="row">
     <h3> Weighted Average </h3>
     	{this.props.match_data.average_score}
</div>

<div className="row">
            <div className={'pricing-chart'}>
          <Chart
            chartType="PieChart"
            data={data}
            options={{}}
            width="100%"
            height="100px"
            legend_toggle
            loader={<div>Loading Chart</div>}
            title="Fuzzy Match Scores"
          />
      </div>
</div>

</div>


     </div>
    );
  }
}

export default MatchDataTile;