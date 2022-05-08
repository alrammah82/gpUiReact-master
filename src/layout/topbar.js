



import React from 'react'

class  Topbar extends React.Component{
    render(){
     return  ( 
    <div className="topbar">
         <div className="toggle">
             <ion-icon name="menu-outline"></ion-icon>
         </div>
      
         <div className="user">
             <img src="img/user.jpg" width="50px" height="50px"  alt="avater" />
         </div>
     </div>)
     
    }

}
export default Topbar;