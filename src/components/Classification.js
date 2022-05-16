import React from "react";
import Chart from "react-apexcharts";
import ClientsTable from "./ClientsTable";
import RfmMonthly from "./RfmMonthly";
import axios from "axios";
import Loading from '../components/loading'
class Classification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      dataInCSV: "",
      setDataInCSV: "",
      isDownload: false,
    };
  }

  static getDerivedStateFromProps(props, state) {
    let dataTable = props.dataTable;
    let countSegment = props.countSegment;
    let countLabel = [];
    let countNum = [];
    if (countSegment != null) {
      countSegment.map((info) => {
        countLabel.push(info[props.countLabel]);
        countNum.push(info.count);
      });
    }

    return {
      table: dataTable,
      headTable: props.headTable,
      headJson: props.headJson,
      countNum: countNum,
      countLabel: countLabel,
      showComponent: countSegment != null ? true : false,
      showTable: dataTable != null ? true : false,
    };
  }

  async download(index) {
    this.setState({
      isDownload: true,
    });

    var f = this.props.file;
    var name = f.name;
    var formData = new FormData();
    formData.append("file", f, name);

    await axios
      .post(
        `http://localhost:8000/${this.props.url}/download/${index}`,
        formData
      )
      .then((response) => {
        const filename =
          response.headers["content-disposition"].split("filename=")[1];
        console.log(filename);
        const type = "text/csv";
        // console.log("data", response)
        const url = window.URL.createObjectURL(
          new Blob(["\ufeff", response.data], { type: type, encoding: "UTF-8" })
        );
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename);
        document.body.appendChild(link);
        link.click();
        this.setState({
          isDownload: false,
        });
        link.remove();
      });
  }
  render() {
    return (
      <div>
        {this.state.isDownload ? <Loading /> : null}

        <div className="container mt-5">
          {this.state.showComponent ? (
            <div>
              <div className="row mt-5">
                <div className="col-lg-6">
                  <Chart
                    options={{
                      chart: {
                        events: {
                          dataPointSelection: (event, chartContext, config) => {
                            let index = config.dataPointIndex + 1;
                            this.download(index);
                          },
                        },
                      },
                      xaxis: { categories: this.state.countLabel },
                    }}
                    series={[{ data: this.state.countNum }]}
                    type="bar"
                    height={350}
                  />
                </div>
                <div className="col-lg-6">
                  <Chart
                    options={{
                      chart: {
                        events: {
                          dataPointSelection: (event, chartContext, config) => {
                            let index = config.dataPointIndex + 1;
                            this.download(index);
                          },
                        },
                      },
                      labels: this.state.countLabel,
                    }}
                    series={this.state.countNum}
                    type="pie"
                    height={350}
                  />
                </div>
              </div>
              {this.props.RfmMonthly != null ? (
                <div className="row mt-3">
                  <div className="col-lg-12">
                    <RfmMonthly data={this.props.RfmMonthly} />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
          {this.state.showTable ? (
            <div className="row mt-2">
              <div className="col-lg-12">
                <ClientsTable
                  tableName={this.props.countLabel}
                  headJson={this.state.headJson}
                  headTable={this.state.headTable}
                  data={this.state.table}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Classification;
