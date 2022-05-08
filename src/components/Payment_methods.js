import React from "react";
import Chart from "react-apexcharts";
class Payment_methods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
      series: [44, 33, 54, 45],

        options : {
          labels: [" Apple PAY ", " Cridt Card ", " Cash ", " STC PAY "],
          chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            },
            
          }
        }]
          }
  };
}



    
  

  render() {
    return (
      <div id="chart">
        <h1>Payment Methods</h1>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={350}
        />
      </div>
    );
  }
}
export default Payment_methods;
