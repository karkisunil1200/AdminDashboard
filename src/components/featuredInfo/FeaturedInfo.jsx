import { ArrowDownward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward />
          </span>
        </div>
        <span className="featuredSub">Compated to previous month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
