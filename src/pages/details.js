import React from "react";
import Topbar from "../layout/topbar";
import ChartClients from "../components/ChartClients";
import Peak_ordering_times from "../components/Peak_ordering_times";
import Sales_volum from "../components/Sales_volum";
import Payment_methods from "../components/Payment_methods";
import Product_sales from "../components/Product_sales";
import ChartBar_city from "../components/ChartBar_city";
import Product_orders from "../components/Product_orders";
import ClientsTable from "../components/ClientsTable";
import Product_table from "../components/Product_table";
import Order_volum from '../components/Order_volum'

class Details extends React.Component {
  render() {
    return (
      <div className="main">
        <Topbar />
        <h1 style={{ fontSize: 30, textAlign: "center" }}>Store Level</h1>

        <div className="row mt-5">
          <div className="cardBox">
            <div className="cardInternal">
              <div>
                <div className="number">50,000 </div>
                <div className="cardName">عميل المتجر </div>
              </div>

              <div className="iconBx">
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>

            <div className="cardInternal">
              <div>
                <div className="number">18 شهر </div>
                <div className="cardName"> منذ التأسيس </div>
              </div>

              <div className="iconBx">
                <ion-icon name="timer-outline"></ion-icon>
              </div>
            </div>

            <div className="cardInternal">
              <div>
                <div className="number sm-font">12,000,000 رس </div>
                <div className="cardName"> مجموع المبيعات </div>
              </div>
              <div className="iconBx">
                <ion-icon name="analytics-outline"></ion-icon>
              </div>
            </div>

            <div className="cardInternal">
              <div>
                <div className="number">500000</div>
                <div className="cardName">طلب ناجح </div>
              </div>

              <div className="iconBx">
                <ion-icon name="bag-handle-outline"></ion-icon>
              </div>
            </div>

            <div className="cardInternal">
              <div>
                <div className="number">300000</div>
                <div className="cardName"> منتج تم بيعه </div>
              </div>

              <div className="iconBx">
                <ion-icon name="checkbox-outline"></ion-icon>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-1">
            <Sales_volum />
          </div>

          <div className="col-lg-4">
            <Payment_methods />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Product_sales />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Order_volum />
          </div>

        
        </div>
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Product_orders />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Peak_ordering_times />
          </div>
        </div>

        <div>
          <ChartClients />
        </div>
        <div className="row mt-5">
          <div className="col-lg-1"></div>

          <div className="col-lg-10">
            <ClientsTable />
          </div>
          <div className="col-lg-1"></div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-10 mt-4 mr-5">
            <Product_table />
          </div>
          <div className="col-lg-1"></div>
        </div>

      </div>
    );
  }
}
export default Details;
