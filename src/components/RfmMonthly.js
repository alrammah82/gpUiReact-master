import React from "react";
import Chart from "react-apexcharts";
class RfmMonthly extends React.Component {


  state = {
      series:null ,
      
      options: {
        chart: {
          id: 'area-datetime',
          type: 'line',
          height: 350,
          zoom: {
            autoScaleYaxis: true
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
          },title: {
            text: "Rfm Monthly",
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
      },
    };
  static getDerivedStateFromProps(props,state) {
    let data = props.data
    let low = data.low_counts;
    let middle = data.Middle_counts;
    let hight = data.hight_counts;
    let months = data.months;
    let low_time = [];
    let middle_time = [];
    let hight_time = [];
  
    months.map((val, i) => {
  let temp_low =[]
  temp_low.push(months[i],low[i])
  low_time.push(temp_low)
  
  let temp_middle =[]
  temp_middle.push(months[i],middle[i])
  middle_time.push(temp_middle)
  
  let temp_hight =[]
  temp_hight.push(months[i],hight[i])
  hight_time.push(temp_hight)
    });
  
    return {

      series: [{
        name:"ٌLow",
        data: low_time
      },
    {

      name:"Middle",
      data: middle_time
    },
    {
      name:"height",
      data: hight_time
    }]

    }
    
  

  
}


  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}
export default RfmMonthly;
