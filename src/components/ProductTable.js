import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

class ProductTable extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("#topProducts").DataTable();
    });
  }

  JsonDataDisplay() {
    let p = this.props.data.products;
    let num = this.props.data.numbers;
    const DisplayData = p.map((info, index) => {
      return (
        <tr>
          <td>{p[index]}</td>
          <td>{num[index]}</td>
        </tr>
      );
    });
    return DisplayData;
  }


  render() {
    return (
      <table id="topProducts" className="display">
        <thead>
          <tr>
            <td>Product</td>
            <td>Orders Numbers</td>
          </tr>
        </thead>
        <tbody>{this.JsonDataDisplay()}</tbody>
      </table>
    );
  }
}

export default ProductTable;
