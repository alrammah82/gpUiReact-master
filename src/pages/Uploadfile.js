import React, { Component } from "react";

class UploadFile extends Component {
  state = {};
  render() {
    return (
      <div className="main">
        <div className="row m-4">
          <div className="cardHeader">
            <h2>عمليات التصنيف</h2>
          </div>
        </div>

        <div className="row m-4 ">
          <div className="contianer  broderMain">
            <h3 className="m-4 "> نموذج عمليات التصنيف على البيانات </h3>
            <form action="" method="get" className=" w-100 p-4">
              <div className="mb-3 ">
                <label htmlFor="data" className="form-label">
                  {" "}
                  اختر البيانات المراد تصنيفها :
                </label>
                <select className="form-select form-select-sm text-end">
                  <option defaultValue disabled>
                    {" "}
                    اختر من القائمة{" "}
                  </option>
                  <option value="1">بيانات شهر رمضان 02/4/2022</option>
                  <option value="2"> بيانات شهر شوال 02/5/2022</option>
                  <option value="3">بيانات شهر ذو القعدة 02/6/2022</option>
                </select>
              </div>
              <div className="col-md-12">
                <label>اختر التصنيفات المراد تطبيقها على البيانات :</label>
              </div>
              <div className="row w-100">
                <div
                  className=" col-md-4 fit-content  d-flex"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="<u> التصنيف العام </u> <b>هو تصنيف العميل الى جيد، متوسط وممتاز بناء على مجموع المدفوعات والخمول وعدد مرات الشراء.</b>"
                >
                  <div className="form-check   fit-content mt-2">
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckChecked"
                    >
                      <ion-icon
                        name="folder-open-outline"
                        className="mainblue"
                      ></ion-icon>
                      تصنيف عام
                    </label>

                    <input
                      className="form-check-input   "
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                  </div>
                </div>

                <div
                  className=" col-md-3 fit-content d-flex"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="<u> تصنيف الخصومات </u> <b>تصنيف العميل الى عميل مهتم بالخصومات او لا بناء على عدد المرات التي اشترا فيها بخصم على السلة. </b>"
                >
                  <div className="form-check   fit-content mt-2">
                    <input
                      className="form-check-input  "
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckChecked"
                    >
                      <ion-icon
                        name="cash-outline"
                        className="mainblue"
                      ></ion-icon>
                      تصنيف الخصومات
                    </label>
                  </div>
                </div>
                <div
                  className=" col-md-4 fit-content d-flex"
                  data-bs-toggle="tooltip"
                  data-bs-html="true"
                  title="<u> تصنيف الوقت  </u> <b> هو تصنيف العميل الى عميل صباحي او مسائي بناء على عدد مرات شرائه صباحا وساء.</b>"
                >
                  <div className="form-check   fit-content mt-2">
                    <input
                      className="form-check-input  "
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckChecked"
                    >
                      <ion-icon
                        name="time-outline"
                        className="mainblue"
                      ></ion-icon>
                      تصنيف الوقت
                    </label>
                  </div>
                </div>
              </div>
              <div className="container m-4 ">
                <div className="col-md-8  text-center">
                  <button
                    type="button"
                    className="btn actionButton btn-main w-50"
                  >
                    تنفيذ العملية{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadFile;
