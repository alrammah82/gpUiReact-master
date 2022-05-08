import React from 'react';


class ProductTable extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <table id="table_id" className="display">
            <thead>
              <tr>
                <th> Product Name </th>
                <th>Basket Product </th>
                <th>num Ordars product </th>
                <th>num orders basket</th>
                <th>Sales</th>


              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Product A </td>
                <td>Product G</td>
                <td>40</td>
                <td>20 </td>
                <td>3100RS</td>

              </tr>
             
            </tbody>
          </table>
         );
    }
}
 
export default ProductTable;