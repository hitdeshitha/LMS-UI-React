import React from "react";

const Content = () => {
  return (
    <div className="col-md-9 w-0 ">
    <main className="mt-5 pt-3">
      <div className="">
              <h4>Dashboard</h4>

                <form className="form-horizontal">
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Cateory">
                      Cateory:
                    </label>
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-toggle="dropdown"
                      >
                        Select Cateory
                        <span className="caret"></span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">HTML</a>
                        </li>
                        <li>
                          <a href="#">CSS</a>
                        </li>
                        <li>
                          <a href="#">JavaScript</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Title">
                      Title:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        name="Title"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Video Duration">
                      Video Duration:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Video Duration"
                        name="Video"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Main Description">
                      Main Description:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Main Description"
                        name="MDescription"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Description">
                      Description:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Description"
                        name="Description"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="UploadDate">
                      Upload Date:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Upload Date"
                        name="UploadDate"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <label className="control-label col-sm-2" for="Select Video">
                      Select Video:
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <div className="col-sm-offset-2 col-sm-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" name="remember" /> Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group d-flex pb-2">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-default">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>

        </div>
    </main>

      
  </div>
  );
};

export default Content;
