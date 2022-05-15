import React from "react";

function welcom() {
  return (
    <div  className="welcome-area" id="welcome">
      {/***** Welcome Area Start
       ***** Header Text Start *****/}
      <div  className="header-text">
        <div  className="container">
          <div  className="row">
            <div
               className="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <h1>
                Data Mining For <em>E-commrce</em>
              </h1>
              <p>
                Develop your store by knowing the types of your customers and
                their activity, knowing the baskets and relationships between
                the items in the basket with details, your profit faster
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Header Text End ***** */}
      {/***** Welcome Area End *****/}
    </div>
  );
}

export default welcom;
