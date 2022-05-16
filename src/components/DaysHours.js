import React from "react";
import Chart from "react-apexcharts";
class DaysHours extends React.Component {



  render() {
    return (
      <div>
        {this.props.data != null ? (
      <div id="chart">
        <Chart
          options={{ xaxis: { categories: this.props.data.hours } }}
          series={[{ data: this.props.data.counts }]}
          type="area"
          height={350}
        />
      </div>
      ): null}
      </div>
    );
  }
}
export default DaysHours;
