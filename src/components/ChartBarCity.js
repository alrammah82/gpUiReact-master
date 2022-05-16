import React from "react";
import Chart from "react-apexcharts";
class ChartBarCity extends React.Component {


  state = {}
static getDerivedStateFromProps(props, state) {

  return{
    data : props.data,
  }
}


    
  

  render() {
    return (
      <div>
      {this.state.data != null ? (
      <div id="chart">
        <Chart
            options={{xaxis:{categories:this.state.data != null ?  this.state.data.cities : ''}}}
            series={[{data:this.state.data != null ? this.state.data.numbers : 0}]}
          type="bar"
          height={350}
        />
      </div>
      ): null}
      </div>
    );
  }
}
export default ChartBarCity;
