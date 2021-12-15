import React from "react";
import "../../../assets/css/SideBarItem.css";

const SidePanelItem = (props) => {
  return (
    <div className="side-bar-item">
      <div className="main p-2">
        <div className="row">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <div className="sidebar-img-box">
              <img src={props.cImage} className="mx-left d-block img-fluid"></img>
            </div>
          </div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-9">
            <div className="sidebar-content">
              <h5>{props.title}</h5>
              <p>{props.subTitle}</p>
              <p className="lead">{props.duration}</p>
            </div>
          </div>
        </div>

        {/* <h3>{topic}</h3>
        <p>{desc}</p> */}
      </div>
    </div>
  );
};

export default SidePanelItem;
