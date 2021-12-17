import React from "react";
import Select from "react-select";
import "./main.css";

const TutorialTypes = [
  { value: "React", label: "React" },
  { value: "Node", label: "Node" },
  { value: "Flutter", label: "Flutter" },
  { value: "Android", label: "Android" },
  { value: "Adobe XD", label: "Adobe XD" },
  { value: "Figma", label: "Figma" },
  { value: "Photoshop", label: "Photoshop" },
];

const SpecialClassTypes = [
  { value: "Observation compartment", label: "Observation compartment" },
  { value: "1st class berth", label: "1st class berth" },
  { value: "2nd class berth", label: "2nd class berth" },
];

const initialState = {
  seatNo: "",
  trainNo: "",
  resDate: "",
  resTime: "",
  destination: "",
  end: "",
  classType: "",
  specialClass: "",
  name: "",
  email: "",
  nic: "",
};

const Content = () => {
  return (
    <div>
      <h2 style={{ marginLeft: "10px", marginTop: "70px" }}>Video Upload</h2>
      <div className="container">
        <div className="row">
          <div>
            {/* <div
            className="container "
            style={{ marginLeft: "280px", marginTop: "10px" }}
          > */}
            <form onSubmit="{this.onSave}">
              <div className="row">
                <div className="col-12">
                  <h4 style={{ marginBottom: "30px", marginTop: "10px" }}>
                    Video Details
                  </h4>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <label htmlFor="fname">Title.</label>
                  <input
                    type="text"
                    id="fname"
                    name="seatNo"
                    placeholder="Enter video name"
                    onChange="{this.onChange}"
                  />
                  <label htmlFor="email">Main Description</label>
                  <input
                    type="text"
                    id="email"
                    name="trainNo"
                    placeholder="Enter main description"
                    onChange="{this.onChange}"
                  />
                  <label htmlFor="adr">Upload Date</label>
                  <input
                    type="date"
                    id="adr"
                    name="resDate"
                    onChange="{this.onChange}"
                  />

                  <label htmlFor="state">Category</label>
                  <Select
                    placeholder="Select category"
                    options={TutorialTypes}
                    onChange="{this.onClassTypeOptionSelected}"
                  />
                </div>

                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <label htmlFor="cname">Video Duration</label>
                  <input
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="Enter duration"
                    name="name"
                    onChange="{this.onChange}"
                  />
                  <label htmlFor="ccnum">Description</label>
                  <input
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    name="email"
                    placeholder="Enter description"
                    onChange="{this.onChange}"
                  />
                  <div class="mb-3">
                    <label for="formFile" class="form-label">
                      Select video
                    </label>
                    <input
                      class="form-control form-control-lg"
                      type="file"
                      id="formFile"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md- col-lg-12">
                  <button
                    style={{ marginTop: "20px", width: "100%" }}
                    type="submit"
                    defaultValue="Continue to checkout"
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
