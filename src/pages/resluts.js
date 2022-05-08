import React from 'react'
import Topbar from '../layout/topbar';
class  Resluts extends React.Component{
    render(){

        return (
            <div className="main">
               <Topbar/>

            <div className="cardBox">
            </div>

            <div className="details  ">
                <div className="recentAnalysis  ">
                  <div className="cardHeader">
                      <h2> قائمة نتائج التحليلات   </h2>
                        <a href="analysis.html" className="actionButton btn-main">   عملية تحليل جديدة </a>
                        
                
                     
  
                     </div>
                     <table className="mainTable">
                        <thead>
                            <tr>
                                <td>م</td>
                                <td> البيانات المستخدمة  </td>
                                <td> تاريخ العملية  </td>
                                <td> عدد الطلبات  </td>

                                <td>تفاصيل   </td>
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                              <td>1</td>
                              <td>بيانات شهر ابريل  </td>
                              <td>02-04-2022  </td>
                              <td>5000</td>
                              <td> <a href="details.html" className="downlode"> <ion-icon name="document-text-outline"></ion-icon></a> 
                                <a href="#" className="downlode"> <ion-icon name="trash-outline" className="text-danger" ></ion-icon></a>   
                            </td>
                          </tr>
                          <tr>
                              <td>2</td>
                              <td> بيانات شهر مارس </td>
                              <td>04-04-2022  </td>
                              <td>7000 </td>
                              <td> <a href="#" className="downlode"> <ion-icon name="document-text-outline"></ion-icon></a> 
                                <a href="#" className="downlode"> <ion-icon name="trash-outline" className="text-danger"></ion-icon></a> 
                            </td>
                          </tr>
  
                       
  
  
                        
                        </tbody>
  
                       </table>
                </div>
                </div>
          </div>
        )
    }
}
export default Resluts;