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
import Order_volum from "../components/Order_volum";
import axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      file: "",
      data: "",
      showComponent: false,
      favorite_payment: null,
      daily_sales: null,
      daily_orders: null,
    };
  }

  handleClick(e) {
    this.refs.fileUploader.click();
  }

  filePathset(e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.target.files[0];
    this.setState({ file });
  }

   readFile() {
    var f = this.state.file;
    var name = f.name;
    var formData = new FormData();
    formData.append("file", f, name);
     this.api(formData)





   


  }

  api(formData){

    this.favorite_payment_m(formData);
    this.store_daily_orders(formData);
   this.store_daily_sales(formData);

  }
  async favorite_payment_m(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/favorite_payment",
      formData
    );
    const resdata = res.data.favorite_payment;
    this.setState({ favorite_payment: resdata });
  }

  async store_daily_sales(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/daily_sales",
      formData
    );
    const resdata = res.data.daily_sales;
    this.setState({ daily_sales: resdata ,
      showComponen:true});


  }

  async store_daily_orders(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/daily_orders",
      formData
    );
    const resdata = res.data.daily_orders;
    this.setState({ daily_orders: resdata });
  }




  render() {
    return (
      <div className="main">
        <Topbar />

        <div className="row">
          <input type="file" id="file" onChange={this.filePathset.bind(this)} />
          <button
            onClick={() => {
              this.readFile();
            }}
          >
            Read File
          </button>
        </div>

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
              <Sales_volum daily_sales={this.state.daily_sales} />
            </div>

            <div className="col-lg-4">
              <Payment_methods favorite_payment={this.state.favorite_payment} />
            </div>
          </div>

        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Product_sales />
          </div>
        </div>
        
          <div className="row mt-5">
            <div className="col-lg-10 offset-lg-1">
              <Order_volum daily_orders={this.state.daily_orders}   />
            </div>
          </div>

        <div className="row mt-5">
          <div className="col-lg-10 offset-lg-1">
            <Product_orders />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <ChartBar_city />
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
