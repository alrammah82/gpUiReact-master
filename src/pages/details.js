import React from "react";
import ChartClients from "../components/ChartClients";
import PeakOrderingTimes from "../components/Peak_ordering_times";
import SalesVolum from "../components/Sales_volum";
import PaymentMethods from "../components/Payment_methods";
import ProductSales from "../components/Product_sales";
import ChartBarCity from "../components/ChartBar_city";
import ProductOrders from "../components/Product_orders";
import BaskeTable from "../components/BasketTable";
import OrderVolum from "../components/Order_volum";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rfm from "../components/rfm";
import Loading from "../components/loading";

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
      rfm: null,
      rfmCount: null,
      discount: null,
      discountCount: null,
      time: null,
      timeCount: null,
      season: null,
      seasonCount: null,
      storeOverview: null,
      topCities: null,
      basket: null,
      isLoadingfavorite_payment: false,
      isLoadingdaily_sales: false,
      isLoadingdaily_orders: false,
      isLoadingrfm: false,
      isLoadingrfmCount: false,
      isLoadingdiscount: false,
      isLoadingdiscountCount: false,
      isLoadingtime: false,
      isLoadingtimeCount: false,
      isLoadingseason: false,
      isLoadingseasonCount: false,
      isLoadingtopCities: false,
      isLoadingbasket: false,
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
    this.setState(
      {
        isLoadingfavorite_payment: true,
        isLoadingdaily_sales: true,
        isLoadingdaily_orders: true,
        isLoadingrfm: true,
        isLoadingrfmCount: true,
        isLoadingdiscount: true,
        isLoadingdiscountCount: true,
        isLoadingtime: true,
        isLoadingtimeCount: true,
        isLoadingseason: true,
        isLoadingseasonCount: true,
      },
      () => {
        var f = this.state.file;
        var name = f.name;
        var formData = new FormData();
        formData.append("file", f, name);
        this.api(formData);
      }
    );
  }

  api(formData) {
    this.storeOverview(formData);
    this.favorite_payment_m(formData);
    this.store_daily_orders(formData);
    this.store_daily_sales(formData);
    this.topCities(formData);

    this.rfm(formData);
    this.rfmCount(formData);
    this.discount(formData);
    this.discountCount(formData);
    this.time(formData);
    this.timeCount(formData);
    this.season(formData);
    this.seasonCount(formData);
    
    this.basket(formData);

  }
  async favorite_payment_m(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/favorite_payment",
      formData
    );
    const resdata = res.data.favorite_payment;
    this.setState({
      favorite_payment: resdata,
      isLoadingfavorite_payment: false,
    });
  }

  async store_daily_sales(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/daily_sales",
      formData
    );
    const resdata = res.data.daily_sales;
    this.setState({
      daily_sales: resdata,
      showComponen: true,
      isLoadingdaily_sales: false,
    });
  }

  async store_daily_orders(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/daily_orders",
      formData
    );
    const resdata = res.data.daily_orders;
    this.setState({ daily_orders: resdata, isLoadingdaily_orders: false });
  }

  async rfm(formData) {
    const res = await axios.post(
      "http://localhost:8000/rfm/?limit=5",
      formData
    );
    const resdata = res.data;
    this.setState({ rfm: resdata, isLoadingrfm: false });
  }

  async rfmCount(formData) {
    const res = await axios.post("http://localhost:8000/rfm/count", formData);
    const resdata = res.data;
    this.setState({ rfmCount: resdata, isLoadingrfmCount: false });
  }

  async discount(formData) {
    const res = await axios.post(
      "http://localhost:8000/discount/?limit=5",
      formData
    );
    const resdata = res.data;
    this.setState({ discount: resdata, isLoadingdiscount: false });
  }

  async discountCount(formData) {
    const res = await axios.post(
      "http://localhost:8000/discount/count",
      formData
    );
    const resdata = res.data;
    this.setState({ discountCount: resdata, isLoadingdiscountCount: false });
  }

  async time(formData) {
    const res = await axios.post(
      "http://localhost:8000/time/?limit=5",
      formData
    );
    const resdata = res.data;
    this.setState({ time: resdata, isLoadingtime: false });
  }
  async timeCount(formData) {
    const res = await axios.post("http://localhost:8000/time/count", formData);
    const resdata = res.data;
    this.setState({ timeCount: resdata, isLoadingtimeCount: false });
  }

  async season(formData) {
    const res = await axios.post(
      "http://localhost:8000/season/?limit=5",
      formData
    );
    const resdata = res.data;
    this.setState({ season: resdata, isLoadingseason: false });
  }

  async seasonCount(formData) {
    const res = await axios.post(
      "http://localhost:8000/season/count",
      formData
    );
    const resdata = res.data;
    this.setState({ seasonCount: resdata, isLoadingseasonCount: false });
  }

  async storeOverview(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/overview",
      formData
    );
    const resdata = res.data;
    this.setState({ storeOverview: resdata, isLoadingstoreOverview: false });
  }

  async topCities(formData) {
    const res = await axios.post(
      "http://localhost:8000/store/top_cities",
      formData
    );
    const resdata = res.data;
    this.setState({ topCities: resdata, isLoadingtopCities: false });
  }

  async basket(formData) {
    const res = await axios.post("http://localhost:8000/basket/", formData);
    const resdata = res.data;
    this.setState({ basket: resdata, isLoadingbasket: false });
  }

  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "150px" }}>
          <div id="preloader">
            <div className="jumper">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <section className="section" id="tryit">
            <div className="container">
              <div className="footer-content">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="contact-form">
                      <div className="row">
                        <h2 className="w-100 text-center mb-2"> Try it Now </h2>
                      </div>
                      <div className="row">
                        <div className="col-md-12 col-sm-12">
                          <fieldset>
                            <label className="form-label" htmlFor="customFile">
                              Uplode Excel ,CSV File
                            </label>
                            <input
                              name="file"
                              type="file"
                              id="name"
                              onChange={this.filePathset.bind(this)}
                              placeholder="excel File"
                              required=""
                              style={{
                                backgroundColor: "rgba(250,250,250,0.3)",
                              }}
                              className="form-control form-control-lg"
                            />
                          </fieldset>
                        </div>

                        <div className="col-lg-12">
                          <fieldset>
                            <button
                              type="button"
                              onClick={() => {
                                this.readFile();
                              }}
                              className="main-button"
                            >
                              Send file
                            </button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Tabs className="mt-5">
            <TabList>

              <Tab>Store Level</Tab>

              <Tab>Clients Level</Tab>


              <Tab>Basket Level</Tab>

            </TabList>

            <TabPanel>
              <div class="row mt-5">
                <div class="col-lg-8 offset-lg-2">
                  <h1 class="section-title text-center">Store Level</h1>
                  <div class="section-title-border margin-t-20"></div>
                  <p class="section-subtitle font-secondary text-muted text-center padding-t-30">
                  The data is analyzed to provide useful store-wide results by analyzing orders, purchases and products
                  </p>
                </div>
              </div>




              <div className="row mt-5">
                <div className="cardBox">
                  <div className="cardInternal">
                    <div>
                      <div className="number">
                        {this.state.storeOverview != null
                          ? this.state.storeOverview["store_customer"]
                          : 0}{" "}
                      </div>
                      <div className="cardName">Store Customer</div>
                    </div>

                    <div className="iconBx">
                      <ion-icon name="people-outline"></ion-icon>
                    </div>
                  </div>

                  <div className="cardInternal">
                    <div>
                      <div className="number">
                        {this.state.storeOverview != null
                          ? this.state.storeOverview["months_since_founded"]
                          : 0}{" "}
                        Month{" "}
                      </div>
                      <div className="cardName"> Since Inception </div>
                    </div>

                    <div className="iconBx">
                      <ion-icon name="timer-outline"></ion-icon>
                    </div>
                  </div>

                  <div className="cardInternal">
                    <div>
                      <div className="number sm-font">
                        {this.state.storeOverview != null
                          ? this.state.storeOverview["total_sales"]
                          : 0}{" "}
                        SR{" "}
                      </div>
                      <div className="cardName"> Total Sales </div>
                    </div>
                    <div className="iconBx">
                      <ion-icon name="analytics-outline"></ion-icon>
                    </div>
                  </div>

                  <div className="cardInternal">
                    <div>
                      <div className="number">
                        {this.state.storeOverview != null
                          ? this.state.storeOverview["successful_transactions"]
                          : 0}{" "}
                      </div>
                      <div className="cardName">Successful Order </div>
                    </div>

                    <div className="iconBx">
                      <ion-icon name="bag-handle-outline"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                  Sales Volume                   </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                  Sales volume refers to the number of units your store sells during a specific reporting period.
                  </p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-lg-10 offset-lg-1">
                  <SalesVolum daily_sales={this.state.daily_sales} />
                </div>
              </div>


              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                  Top Cities & Payment methods                   </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                  indicates the payment methods used by customers and the percentage of each payment method among the total payments                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-6 offset-lg-1">
                  <ChartBarCity data={this.state.topCities} />
                </div>


                <div className="col-lg-4">
                  <PaymentMethods
                    favorite_payment={this.state.favorite_payment}
                  />
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                  Order Volume                  </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                  The volume of orders over a specified period is shown by two factors, time and number of orders                  </p>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-lg-10 offset-lg-1">
                  <OrderVolum daily_orders={this.state.daily_orders} />
                </div>
              </div>
            </TabPanel>              

            <TabPanel>
              <div class="row">
                <div class="col-lg-8 offset-lg-2">
                  <h1 class="section-title text-center">Clients Level</h1>
                  <div class="section-title-border margin-t-20"></div>
                  <p class="section-subtitle font-secondary text-muted text-center padding-t-30">
                    In this level of analysis, the data is analyzed at the
                    customer level and it is done on several criteria and
                    several classifications through the data provided through
                    the file
                  </p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                    General classification of customers
                  </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                    The customer's rating as good, medium, and excellent based
                    on total payments, inactivity, and the number of purchases
                  </p>
                </div>
              </div>
              <Rfm
                dataTable={this.state.rfm}
                headJson={[
                  "CustmerName",
                  "recency",
                  "frequency",
                  "amount",
                  "RFM_score",
                  "general_segment",
                ]}
                headTable={[
                  "Custmer Name",
                  "last purchase",
                  "Purchase times",
                  "amount",
                  "RFM score",
                  "General segment",
                ]}
                countSegment={this.state.rfmCount}
                countLabel="general_segment"
              />
              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                    Classification of discounts
                  </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                    Classification of the customer to a customer interested in
                    discounts or not, based on the number of times he bought
                    with a discount on the basket
                  </p>
                </div>
              </div>
              <Rfm
                dataTable={this.state.discount}
                headJson={[
                  "CustmerName",
                  "frequency",
                  "number_of_discounts",
                  "discount",
                  "amount",
                  "percentege",
                  "Discount_segment",
                ]}
                headTable={[
                  "CustmerName",
                  "frequency",
                  "number_of_discounts",
                  "discount",
                  "amount",
                  "percentege",
                  "Discount_segment",
                ]}
                countSegment={this.state.discountCount}
                countLabel="Discount_segment"
              />{" "}
              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">Time classification</h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                    Classifying the customer into a morning or evening customer
                    based on the number of times purchases in the morning and in
                    the evening.{" "}
                  </p>
                </div>
              </div>
              <Rfm
                dataTable={this.state.time}
                headJson={["CustmerName", "frequency", "Time_segment"]}
                headTable={["Custmer Name", "frequency", "Time segment"]}
                countSegment={this.state.timeCount}
                countLabel="Time_segment"
              />{" "}
              <div class="row mt-5">
                <div class="col-lg-8 ">
                  <h5 class="section-title text-left">
                    General classification of season
                  </h5>
                  <p class="section-subtitle font-secondary text-justify text-muted text-left padding-t-30">
                    The customer's rating as good, medium, and excellent based
                    on total payments, inactivity, and the number of purchases
                  </p>
                </div>
              </div>
              <Rfm
                dataTable={this.state.season}
                headJson={["CustmerName", "frequency", "season_segment"]}
                headTable={["Custmer Name", "frequency", "season segment"]}
                countSegment={this.state.seasonCount}
                countLabel="season_segment"
              />
            </TabPanel>
            <TabPanel>
            <div class="row mt-5">
                <div class="col-lg-8 offset-lg-2">
                  <h1 class="section-title text-center">Basket Level</h1>
                  <div class="section-title-border margin-t-20"></div>
                  <p class="section-subtitle font-secondary text-muted text-center padding-t-30">
                  Market basket analysis is a data mining technique used by retailers to increase sales by better understanding customer purchasing patterns. It involves analyzing large data sets, such as purchase history, to reveal product groupings, as well as products that are likely to be purchased together.
                  </p>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-lg-12">
                  <Rfm
                    dataTable={this.state.basket}
                    headJson={["antecedents", "consequents"]}
                    headTable={["Basket Product", "Suggested product"]}
                    countLabel="Basket"
                  />{" "}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default Details;
