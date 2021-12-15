import React from "react";
import "../../../assets/css/Product.css";

const Product = (props) => {
  return (
    <div className="product">
      <h2>{props.subTitle}</h2>
      <div className="card">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6" >
            <img src={props.cImage} class="mx-left d-block img-fluid"></img>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6">
            <div className="mt-5 mb-5">
              <h2>{props.index}</h2>
              <br/>
              <h2>{props.title}</h2>
              <br/>
              <button className="btn-play">Play now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="productDesc">
        <h3>{props.topic}</h3>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Product;
