
import React from 'react';
import { render } from 'react-dom';
import { Chart } from 'react-google-charts';

class PricingChartTile extends React.Component {
  render() {
    let data = [['Date', '']]
    if (this.props.data.length > 1) {
      this.props.data.forEach(function(crawl) {
        let crawl_date = crawl.crawl_time
        let crawl_price = crawl.price
        data.push([crawl_date, crawl_price])
      })
    }
    return (
      <div className={'pricing-chart'}>
          <Chart
            chartType="LineChart"
            data={data}
            options={{}}
            width="100%"
            height="240px"

            loader={<div>Loading Chart</div>}
            options={{
              hAxis: {title: 'Date',},
              vAxis: {title: 'Price',},
            }}
          />
      </div>
    );
  }
}

export default PricingChartTile