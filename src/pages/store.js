


import React from 'react';
import Topbar from '../layout/topbar';


class  Store extends React.Component{
    render(){
     return        <div className="main">
                 <Topbar/>

  

   <div className="row m-4 ">
     <div className="container mx-auto my-1">
         <div className="md:flex no-wrap md:-mx-2 ">
             <div className="w-full md:w-4/12 md:mx-2">

                 <div className="card text-center shadow-2xl w-100">
                     <figure className="">
                         <img src="img/store.jpg" className="rounded-xl"/>
                     </figure>
                     <div className="card-body">
                         <h2 className="card-title">
                             متجر رقمي 
                         </h2>
                         <ul className="text-right">
                             <li> اسم المتجر : متجر 1 </li>
                             <li>  معرف المتجر : 151458458</li>
                             <li> الإيميل : example@gamil.com</li>
                             <li> الحالة : نشط </li>
                         </ul>
                         <div className="justify-center card-actions">
                             <a href="https://salla.sa/{{ $store->getStoreUsername() }}"
                                className="btn btn-outline btn-accent">زيارة المتجر </a>
                         </div>
                     </div>
                 </div>
             </div>

             <div className="row m-4 ">
                 <div className="card col-md-5 m-4">
                     <img src="..." className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <p className="card-text"> افكار محتوى </p>
                     </div>
                   </div>

                   <div className="card col-md-5 m-4" >
                     <img src="..." className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <p className="card-text">افكار محتوى</p>
                     </div>
                   </div>


                   <div className="card col-md-5 m-4" >
                     <img src="..." className="card-img-top" alt="..."/>
                     <div className="card-body">
                       <p className="card-text">افكار محتوى</p>
                     </div>
                   </div>


                   <div className="card col-md-5 m-4" >
                     <img src="..." className="card-img-top" alt="..." />
                     <div className="card-body">
                       <p className="card-text">افكار محتوى</p>
                     </div>
                   </div>
             </div>
             
          
         </div>
     </div>
   </div>
      
    
 
 </div>  
    }

}
export default Store;