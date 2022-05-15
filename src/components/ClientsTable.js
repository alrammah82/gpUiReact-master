import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


class ClientsTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      tableName: props.tableName

     };
     
  }


    componentDidMount(){
      $(document).ready(function () {

      $('#general_segment').DataTable();
      $('#Discount_segment').DataTable();
      $('#Time_segment').DataTable();
      $('#season_segment').DataTable();
      $('#Basket').DataTable();




      
      })
      

    
    }
    static getDerivedStateFromProps(props,state) {
     
      return{
        data:props.data,
        headTable:props.headTable,
        headJson:props.headJson
      }
    }

     JsonDataDisplay(){
       
      const DisplayData=this.state.data.map(
          (info)=>{
              return(
                  <tr >
                    {
                      this.state.headJson.map((value)=>{
                        return(
                      <td >{info[value]}</td>

                        )
                      })
                    }
                  </tr>
              )
          }
      )
      return DisplayData
        }

        DisplayHeadTable() {
          const DisplayHead= this.state.headTable.map((info)=>{
            return(
              <td>{info}</td>
            )
          })
          return DisplayHead
        }


    render() { 
        return ( 
            <table id={this.state.tableName} className="display">
            <thead>
              <tr>
              {this.DisplayHeadTable()}
              </tr>
            </thead>
            <tbody>
              {this.JsonDataDisplay()}
            </tbody>
          </table>
         );
    }
}
 
export default ClientsTable;

