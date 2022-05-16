import React from "react";
import Chart from "react-apexcharts";
class SalesVolum extends React.Component {
  state = {
    series: null,

    options: {
      chart: {
        id: "area-datetime",
        type: "area",
        height: 350,
        zoom: {
          autoScaleYaxis: true,
        },
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
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      "yaxis": [{

        "labels": {
            "formatter": function (val) {
                return val.toFixed(0)
            }
        }
    }],
      xaxis: {
        type: "datetime",
      },
      title: {
        text: "Sales Volum",
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  static getDerivedStateFromProps(props, state) {
    let data = props.daily_sales;
    return {
      series: [
        {
          name: "Sales",
          data: data,
        },
      ],
      showComponent: data != null ? true : false,
    };
  }
  render() {
    return (
      <div>
        {this.state.showComponent ? (
          <div id="chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              height={350}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default SalesVolum;
