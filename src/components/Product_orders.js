import React from "react";
import Chart from "react-apexcharts";
class Product_orders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "product 1",
          data: [2, 5, 8, 4, 5, 10, 2, 30, 4, 1, 22, 2],
        },
        {
          name: "product 2",
          data: [2, 10, 2, 5, 8, 4, 8, 30, 4, 1, 22, 2],
        },
        {
          name: "product 3",
          data: [2, 5, 8, 4, 4, 1, 22, 5, 10, 2, 30, 2],
        },
        {
          name: "product",
          data: [2, 1, 30, 4, 5, 8, 4, 5, 10, 21, 22, 2],
        },
        {
          name: "product",
          data: [2, 5, 8, 4, 5, 10, 2, 30, 4, 1, 22, 2],
        },
        {
          name: "product",
          data: [2, 5, 8, 4, 5, 10, 2, 30, 4, 1, 22, 2],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "heatmap",
          zoom: {
            autoScaleYaxis: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"],
        title: {
          text: "Product orders",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="heatmap"
          height={350}
        />
      </div>
    );
  }
}
export default Product_orders;
