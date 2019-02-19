import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class MatchDataTile extends React.Component {
  render() {

 	let options = {'chartArea': {left:12,top:20,width:"100%",height:"80%"},    vAxis: {
      maxValue: 100,
    },}

let data = [
  ["Type","Score", { role: "style" }],
  ["Brand", this.props.match_data.manufacturer_score, "#ef5675"], 
  ["Part Number", this.props.match_data.part_number_score, "#7a5195"], 
  ["Product Name",this.props.match_data.product_name_score, "#003f5c"], 
  ["Price", this.props.match_data.price_score, "#ffa600"],]

let pie_data = [['Data Point', 'Weight'],
						['Manufacturer', 50],
						['Part Number', 30],
						['Product Name', 15],
						['Price', 5],] 

let pie_options = {
  title: "Distribution",
  slices: [
    {
      color: "#ef5675"
    },
    {
      color: "#7a5195"
    },
    {
      color: "#003f5c"
    },
    {
      color: "#ffa600"
    }
  ],
  tooltip: {
    showColorCode: true
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "80%"
  },
  fontName: "Roboto"
};

    return (
     <div className="row"> 
     	<div className="small-8 medium-8 large-8 columns data-box-match-bar">
      <div className={'pricing-chart'}>
          <Chart
            chartType="ColumnChart"
            data={data}
            options={options}

            loader={<div>Loading Chart</div>}
            title="Match Score Weights"
						width="100%"
            height="240px"
          />
      </div>
      </div>

			<div className="small-4 medium-4 large-4 columns">


<div className="row">
     <div className="center-er">
     	<h3>Weighted Average</h3>
     	<h4>{this.props.match_data.average_score}</h4>
			</div>
	</div>

<div className="row">
            <div className={'pricing-chart'}>
          <Chart
            chartType="PieChart"
            data={pie_data}
            options={pie_options}
            width="100%"
            height="110px"
            legend_toggle
            loader={<div>Loading Chart</div>}
            title="Weights"
          />
      </div>
</div>

</div>


     </div>
    );
  }
}

export default MatchDataTile;