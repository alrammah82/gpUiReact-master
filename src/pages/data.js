import React from "react";
import Topbar from "../layout/topbar";
import axios from "axios"

class Data extends React.Component {

  state = {
 
    // Initially, no file is selected
    selectedFile: null
  };
  onFileChange = event => {
    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };


    // On file upload (click the upload button)
   async onFileUpload()  {
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "file",
        this.state.selectedFile
              );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      const requestOptions = {
        method:"POST",
        headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-Type": "multipart/form-data"},
        body:formData
      }
     await fetch("http://127.0.0.1:8000")
      .then( (res) => console.log(res.ok))
      //this.sendData(formData);
    };


  sendData(data) {
    // POST request using fetch with error handling
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: data ,
    };
    fetch("http://127.0.0.1:8000/rfm/", requestOptions)
      .then(async (response) => {
        const isJson = response.headers
          .get("content-type")
          ?.includes("application/json");
        const data = isJson && (await response.json());

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
        console.log(data);
        //this.setState({ postId: data.id });
      })
      .catch((error) => {
        this.setState({ errorMessage: error.toString() });
        console.error("There was an error!", error);
      });
  }
  render() {
    return (
      <div className="main">
        <Topbar />
        <div className="cardBox"></div>

        <div className="details  ">
          <div className="recentAnalysis  ">
            <div className="cardHeader">
              <h2> قائمة البيانات </h2>
              <button
                type="button"
                className="btn  actionButton btn-main"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                طلب بيانات جديدة
              </button>

              <div>
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload()}>
                  Upload!
                </button>
            </div>              
               <div
                className="modal fade text-left"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        طلب بيانات جديدة من سلة
                      </h5>
                      <button
                        type="button"
                        className="btn-close m-4"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                           
                          اسم للبيانات(اختياري) 
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="الرجاء تسمية البيانات "
                          aria-label="default input example"
                        />

                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                           
                          تاريخ البداية 
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          aria-label="default input example"
                        />

                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                           
                          تاريخ النهاية 
                        </label>
                        <input
                          className="form-control"
                          type="date"
                          aria-label="default input example"
                        />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn actionButton btn-main"
                      >
                         
                        تأكيد الطلب 
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        إغلاق 
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table className="mainTable">
              <thead>
                <tr>
                  <td>م</td>
                  <td> الاسم </td>
                  <td> تاريخ طلب البيانات</td>
                  <td> الحصول على البيانات </td>

                  <td>تحكم </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>تجربة </td>
                  <td>02-04-2022 </td>
                  <td>03-04-2020</td>
                  <td>
                     
                    <a href="#" className="downlode">
                       
                      <ion-icon name="arrow-down-circle"></ion-icon>
                    </a>
                    <a href="#" className="downlode">
                       
                      <ion-icon
                        name="trash-outline"
                        className="text-danger"
                      ></ion-icon>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td> بيانات شهر مارس </td>
                  <td>04-04-2022 </td>
                  <td>05-04-2020 </td>
                  <td>
                     
                    <a href="#" className="downlode">
                       
                      <ion-icon name="arrow-down-circle"></ion-icon>
                    </a>
                    <a href="#" className="downlode">
                       
                      <ion-icon
                        name="trash-outline"
                        className="text-danger"
                      ></ion-icon>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
export default Data;
