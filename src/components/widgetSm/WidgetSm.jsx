import { Visibility } from "@mui/icons-material";
import React from "react";
import "./widgetSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joined Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.alphacoders.com/103/1036428.jpg"
          />
          <div className="widgetSmUser">
            <span className="wiidgetSmUsername">Buddha Gautham</span>
            <span className="widgetSmUserTitle">Engliitened Being</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images3.alphacoders.com/164/164959.jpg"
          />
          <div className="widgetSmUser">
            <span className="wiidgetSmUsername">Buddha Gautham</span>
            <span className="widgetSmUserTitle">Engliitened Being</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images3.alphacoders.com/605/605192.png"
          />
          <div className="widgetSmUser">
            <span className="wiidgetSmUsername">Buddha Gautham</span>
            <span className="widgetSmUserTitle">Engliitened Being</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.alphacoders.com/103/1036428.jpg"
          />
          <div className="widgetSmUser">
            <span className="wiidgetSmUsername">Buddha Gautham</span>
            <span className="widgetSmUserTitle">Engliitened Being</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            className="widgetSmImg"
            src="https://images.alphacoders.com/103/1036428.jpg"
          />
          <div className="widgetSmUser">
            <span className="wiidgetSmUsername">Buddha Gautham</span>
            <span className="widgetSmUserTitle">Engliitened Being</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
