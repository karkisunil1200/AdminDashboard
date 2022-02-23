import React from "react";
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";
import "./product.css";
import { productData } from "../../dummyData";

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://images5.alphacoders.com/606/606284.jpg"
              alt=""
              className="productInfoImg"
            />
            <span className="productName">Apple airpod</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">133</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales: </span>
              <span className="productInfoValue">133</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active: </span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock: </span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom"></div>
    </div>
  );
};

export default Product;
