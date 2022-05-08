import React from 'react';


class ClientsTable extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <table id="top_10_customer" className="display">
            <thead>
              <tr>
                <th> Name </th>
                <th>Phome </th>
                <th>Ordars </th>
                <th>Sales</th>
                <th>Last order</th>
                <th>Favorite product</th>
                <th>Classification of discounts</th>
                <th>Classification of Time</th>
                <th>classification of general </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>محمد أحمد </td>
                <td>05012345678</td>
                <td>10</td>
                <td>2052 RS </td>
                <td>10 Days</td>
                <td>Product 1</td>
                <td>1</td>
                <td>afternoon</td>
                <td>good</td>
              </tr>
             
            </tbody>
          </table>
         );
    }
}
 
export default ClientsTable;