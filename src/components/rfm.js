import React from "react";
import Chart from "react-apexcharts";
import ClientsTable from "../components/ClientsTable";

class Rfm extends React.Component {
  state = {}

 static getDerivedStateFromProps(props,state) {
     
    let dataTable = props.dataTable;
    let countSegment = props.countSegment;
    console.log(`count is ${countSegment}`);
    let countLabel= []
    let countNum= []
    if(countSegment !=null){
        countSegment.map(
            (info)=>{
                countLabel.push(info[props.countLabel])
                countNum.push(info.count)

            }
        )
    }

    return {
        table: dataTable,
            headTable:props.headTable,
            headJson:props.headJson,
            countNum:countNum,
            countLabel:countLabel,
        showComponent: countSegment !=null?true:false,
        showTable: dataTable !=null?true:false,

      };




    
  }
  render() {
    return (
        <div>
      <div className="container mt-5">
                {this.state.showComponent ? (
<div>
        <div className="row">
            <div className="col-lg-6">
            <Chart
            options={{xaxis:{categories: this.state.countLabel}}}
            series={[{data:this.state.countNum}]}
            type="bar"
            height={350}
          />   
            </div>
            <div className="col-lg-6">
            <Chart
            options={{labels: this.state.countLabel}}
            series={this.state.countNum}
            type="pie"
            height={350}
          />
            </div>
        </div>

        </div>
        ):null}

        {this.state.showTable ? (

        <div className="row mt-2">
            <div className="col-lg-12">
            <ClientsTable tableName={this.props.countLabel} headJson={this.state.headJson} headTable={this.state.headTable} data={this.state.table} />
            </div>
        </div>
                ):null}

        </div>
      </div>
    );
  }
}

export default Rfm;
