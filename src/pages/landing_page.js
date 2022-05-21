import React from "react";
import Welcome from "../components/welcom";
import OurTeam from '../components/ourTeam'
import {Link} from "react-router-dom"
class Landing_page extends React.Component {
  state = {};
  render() {
    return (
      
      <div>
        <div id="preloader">
          <div className="jumper">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <Welcome />
        <section className="section" id="services">
          <div className="container mt-4">
            <div className="row text-center">
               
              <h1 className="m-4 w-100 text-center"> Servies </h1> 
            </div>


            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <div className="features-item" style={{ height: "550px" }}>
                  <div className="features-icon">
                    <h2>01</h2>
                    <img src="assets/images/basket.png" alt="" />
                    <h4>Market Basket Analysis</h4>
                    <p>
                      Market basket analysis is a data mining technique used by
                      retailers to increase sales by better understanding
                      customer purchasing patterns. It involves analyzing large
                      data sets, such as purchase history, to reveal product
                      groupings, as well as products that are likely to be
                      purchased together.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <div className="features-item" style={{ height: "550px" }}>
                  <div className="features-icon">
                    <h2>02</h2>
                    <img src="assets/images/snow.png" alt="" />
                    <h4>Season Classification</h4>
                    <p>
                      Seasonal segmentation aims to find those segments of
                      customers who regularly make purchases only in a portion
                      of the year, in our case it could be in Eid Al-Adha or Eid
                      Al-Fitr. This can help the owner to establish seasonal
                      marketing strategies.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <div className="features-item" style={{ height: "550px" }}>
                  <div className="features-icon">
                    <h2>03</h2>
                    <img src="assets/images/discount.png" alt="" />
                    <h4>Discount Classification</h4>
                    <p>
                      On discount segmentation, we will segment the customers
                      based on how many times they bought with discounts, it
                      will help the owner to target the customers who are
                      seeking a discount and provide them with special offers.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter bottom move 30px over 0.6s after 0.4s"
              >
                <div className="features-item mt-3" style={{ height: "350px" }}>
                  <div className="features-icon">
                    <h2>04</h2>
                    <img src="assets/images/customer.png" alt="" />
                    <h4> RFM Classification</h4>
                    <p>
                      it allows marketers to target specific clusters of
                      customers with communications that are much more relevant
                      for their behavior..
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <div className="features-item mt-3" style={{ height: "400px" }}>
                  <div className="features-icon">
                    <h2>05</h2>
                    <img src="assets/images/time.png" alt="" />
                    <h4>Time Classification</h4>
                    <p>
                      On time segmentation we are looking for the customers'
                      preferred purchase time, it will help the owner to choose
                      the best time to send marketing messages and offers to his
                      customers.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <div className="features-item mt-3" style={{ height: "330px" }}>
                  <div className="features-icon">
                    <h2>06</h2>
                    <img src="assets/images/data.png" alt="" />
                    <h4>Data Exploration</h4>
                    <p>
                      It is a general analysis of sales and orders data over
                      specific time periods
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="left-image-decor"></div>

        <section className="section" id="promotion">
          <div className="container">
            <div className="row text-center">
               
              <h1 className="m-4 w-100 text-center">
                 
                What Is The Progress? 
              </h1> 
            </div>

            <div className="row">
              <div
                className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/left-image.png"
                  className="rounded img-fluid d-block mx-auto"
                  alt="App"
                />
              </div>
              <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                <ul>
                  <li
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
                    className="col-md-12"
                  >
                    <img src="assets/images/excel.png" alt="" />
                    <div className="text">
                      <h4>1- UPLODE the Data file </h4>
                      <p>
                        in frist step you need to preper the data from salla
                        follwing the 
                        <a href="https://help.salla.sa/article/1082536000">
                          guide 
                        </a>
                        or uplode excel file you already have .
                      </p>
                    </div>
                  </li>
                  <li
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.5s"
                    className="col-md-12"
                  >
                    <img src="assets/images/data-processing.png" alt="" />
                    <div className="text">
                      <h4>2- Processing the DATA</h4>
                      <p>
                        After the file is sent in the first step, the artificial
                        intelligence engine analyzes the data and prepares the
                        output for the front end .
                      </p>
                    </div>
                  </li>
                  <li
                    data-scroll-reveal="enter right move 30px over 0.6s after 0.6s"
                    className="col-md-12"
                  >
                    <img src="assets/images/data-visualization.png" alt="" />
                    <div className="text">
                      <h4>3- Data Visualization</h4>
                      <p>
                        At this step, interactive graphs and tables are created
                        based on the data extracted
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="tryit">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="contact-form">
                    <div className="row">
                      <h2 className="w-100 text-center mb-2"> Try it Now </h2>
                    </div>
                      <div className="row mt-5">
    

                        <div className="col-lg-12">
                            <Link to="/details">
                                    <button className="main-button">Preview Demo</button>
                            </Link>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="right-image-decor"></div>

        <section className="section" id="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="center-heading">
                  <h2>
                    Who we <em>Are ?</em>
                  </h2>
                </div>
              </div>
              <div
                className="col-lg-10 col-md-12 col-sm-12 mobile-bottom-fix-big"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <OurTeam />
              </div>
            </div>
          </div>
        </section>

        <footer id="contact-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="sub-footer">
                  <p>Copyright &copy; 2022 Deatils Team </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div />
      </div>
    );
  }
}

export default Landing_page;
