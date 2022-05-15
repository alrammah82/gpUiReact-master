import React from "react";
import Topbar from "../layout/topbar";

class Home extends React.Component {
  render() {
    return (
      <div className="Appcontainer">
        <div className="main">
          <Topbar />
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

          <div className="details">
            <div className="recentAnalysis">
              <div className="cardHeader">
                <h2>البيانات الحديثة</h2>
                <a href="#" className="actionButton btn-main">
                  استعراض الكل 
                </a>
              </div>
              <table className="mainTable">
                <thead>
                  <tr>
                    <td>م</td>
                    <td> طلب البيانات</td>
                    <td> الحصول على البيانات </td>
                    <td>حالة المعالجة </td>
                    <td>تفاصيل التحليل </td>
                    <td>تحميل البيانات </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>02-04-2022 </td>
                    <td>03-04-2020</td>
                    <td>
                       
                      <span className="status done">تمت المعالجة </span>
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="laptop-outline"></ion-icon>
                      </a> 
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="arrow-down-circle"></ion-icon>
                      </a> 
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>04-04-2022 </td>
                    <td>05-04-2020 </td>
                    <td>
                       
                      <span className="status progress">جاري المعالجة</span>
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="laptop-outline"></ion-icon>
                      </a> 
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="arrow-down-circle"></ion-icon>
                      </a> 
                    </td>
                  </tr>

                  <tr>
                    <td>3</td>
                    <td>06-04-2022</td>
                    <td>07-04-2020 </td>
                    <td>
                       
                      <span className="status   notstart">لم يتم البدء </span>
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="laptop-outline"></ion-icon>
                      </a> 
                    </td>
                    <td>
                       
                      <a href="#" className="downlode">
                         
                        <ion-icon name="arrow-down-circle"></ion-icon>
                      </a> 
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
