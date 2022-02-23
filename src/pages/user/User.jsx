import {
  CalendarToday,
  LocationSearching,
  PermIdentity,
} from "@mui/icons-material";
import MailOutline from "@mui/icons-material/MailOutline";
import React from "react";
import "./user.css";

const User = () => {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <button className="userAddButton">Create</button>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images4.alphacoders.com/123/123036.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Sunil Karki</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">skarki1200</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">02/22/2022</span>
            </div>

            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">skarki1200@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">3344 hamunam dhoka</span>
            </div>
          </div>
        </div>
        <div className="userUpdate"></div>
      </div>
    </div>
  );
};

export default User;
