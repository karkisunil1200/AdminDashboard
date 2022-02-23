import React from "react";
import "./widgetLg.css";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLg">
          <td className="widgetLgUser">
            <img
              src="https://images7.alphacoders.com/650/650008.jpg"
              className="widgetLgImg"
            />
            <span ClassName="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2</td>
          <td className="widgetLgAmount">$120.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLg">
          <td className="widgetLgUser">
            <img
              src="https://images7.alphacoders.com/650/650008.jpg"
              className="widgetLgImg"
            />
            <span ClassName="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2</td>
          <td className="widgetLgAmount">$120.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>

        <tr className="widgetLg">
          <td className="widgetLgUser">
            <img
              src="https://images7.alphacoders.com/650/650008.jpg"
              className="widgetLgImg"
            />
            <span ClassName="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2</td>
          <td className="widgetLgAmount">$120.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLg;
