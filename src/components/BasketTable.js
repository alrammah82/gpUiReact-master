import React from 'react';
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 


class BasketTable extends React.Component {

 
     
  


    componentDidMount(){
      $(document).ready(function () {

      $('#BasketTable').DataTable();





      
      })
      

    
    }
    static getDerivedStateFromProps(props,state) {
     
      return{
        data:props.data,
        headTable:['antecedents','consequents'],
        headJson:['antecedents','consequents']
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
            <table id='BasketTable' className="display">
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
 
export default BasketTable;

