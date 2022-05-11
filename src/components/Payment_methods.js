import React from "react";
import Chart from "react-apexcharts";
class Payment_methods extends React.Component {
  state = {
    series: [],

    options: {},
  };

  static getDerivedStateFromProps(props, state){

    let data = props.favorite_payment;

    let num = [];
    let lab = [];
    if(data != null){

    data.map((e, index) => {
      num.push(e[0]);
      lab.push(e[1]);
    });
  }
   return  {
      series: lab,
      options: {
        labels: num,
  
        chart: {
          type: "donut",
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },      
      showComponent: data!=null?true:false,

    }
  }



  render() {
    return (
      <div>
        {this.state.showComponent ? (
      <div id="chart">
        <h1>Payment Methods</h1>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          height={350}
        />
      </div>
              ) : null}
              </div>
    );
  }
}
export default Payment_methods;
