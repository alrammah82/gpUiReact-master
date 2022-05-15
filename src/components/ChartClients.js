import React from "react";
import Chart from "react-apexcharts";
class ChartClients extends React.Component {
  
    state = {
      series_Ganaral: [44, 33, 54],

      options_Ganaral: {
        labels: ["جيد ", "ممتاز ", "متوسط"],
        chart: {
          type: "pie",
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
              title: {
                text: "HeatMap Chart",
              },
            },
          },
        ],
      },
      series_Discount: [ 33, 54],

      options_Discount: {
        labels: [
          'مهام بالخصومات  ',
          'غير مهتم ',
      
      ],
      chart: {
          type: "pie",
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
              title: {
                text: "HeatMap Chart",
              },
            },
          },
        ],
      },
      series_ClientType: [0,44, 33],

      options_ClientType: {
        labels: [
          'عميل صباحي  ',
          'عميل مسائي  ',
      
      ],
        chart: {
          type: "pie",
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
    };
  render() {
    return (
      <div className="row  m-4">
        
        <div className="col-lg-4">
          <h4 className="text-center"> تصنيف عام </h4>
          <Chart
            options={this.state.options_Ganaral}
            series={this.state.series_Ganaral}
            type="pie"
            height={350}
          />
        </div>
        <div className="col-lg-4">
          <h4 className="text-center"> تصنيف الخصومات </h4>
          <Chart
            options={this.state.options_Discount}
            series={this.state.series_Discount}
            type="pie"
            height={350}
          />
        </div>
        <div className="col-lg-4">
          <h4 className="text-center"> تصنيف الوقت </h4>
          <Chart
            options={this.state.options_ClientType}
            series={this.state.series_ClientType}
            type="pie"
            height={350}
          />
        </div>
      </div>
    );
  }
}
export default ChartClients;
