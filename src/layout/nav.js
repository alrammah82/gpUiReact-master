


import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class Nav extends React.Component{
    render(){
     return      <div className="navigation">
     <ul>

          
         <li>
             <a href="">
                 <span className="icon"> <ion-icon name="map-outline"></ion-icon>  </span>
                 <span className="title"> ورشة تحليل البيانات  </span>
             </a>
           </li>
         
         <li>

         <Link to="/">
                <span className="icon"> <ion-icon name="home-outline"></ion-icon></span>
               <span className="title"> الرئيسية  </span>
         </Link> 
         
         </li>
         <li>
            <Link to="store">
                    <span className="icon"><ion-icon name="list-outline"></ion-icon></span>
                    <span className="title"> المتجر   </span>
            </Link>
           </li>

         <li>
             <Link to="data">
                 <span className="icon"> <ion-icon name="server-outline"></ion-icon></span>
                 <span className="title">البيانات  </span>
             </Link>
           </li>

           <li>
             <Link to="details">
                 <span className="icon"> <ion-icon name="server-outline"></ion-icon></span>
                 <span className="title">details  </span>
             </Link>
           </li>

           <li>
             <Link to="analysis">
                 <span className="icon"> <ion-icon name="stats-chart-outline"></ion-icon></span>
                 <span className="title"> التصنيفات   </span>
             </Link>
           </li>

           <li>
             <Link to="resluts">
                 <span className="icon"> <ion-icon name="reader-outline"></ion-icon></span>
                 <span className="title">الننتائج   </span>
             </Link>
           </li>

           <li>
             <a href="">
                 <span className="icon">  <ion-icon name="enter-outline"></ion-icon></span>
                 <span className="title">خروج   </span>
             </a>
           </li>
      </ul>     
 </div>
    }

}
export default Nav;