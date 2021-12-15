import React, { Component } from "react";
import Product from "../Product/Product";
import Sidebar from "../Sidebar/Sidebar";
import "../../../assets/css/MContent.css";
import CoverImage from "../../../assets/img/item-Image.png";

class Content extends Component {
  render() {
    return (
      <div className="containers">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Product
                subTitle="Android Studio Tutorial 1"
                title="Create Animated UI Using Android Studio"
                index="Tute 1"
                cImage={CoverImage}
                topic="Animated UI for Flora App"
                desc="Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
              />
            </div>
            <div className="col-md-4 ">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
