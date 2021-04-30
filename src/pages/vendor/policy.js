import React from "react";
import windowSize from "../../components/windowSize";

export default function policy() {
  const margin = windowSize().width > 768 ? "7em" : 0;
  return (
    <div
      style={{
        marginRight: margin,
        marginLeft: margin,
      }}
      className="body"
    >
      <h1>How it works</h1>
      <p style={{ backgroundColor: "yellow" }}>
        <b>
          <i>
            Commissions will only apply in cases where an order is successfully
            delivered to a customer.
          </i>
        </b>
      </p>
      <p>
        At Wasilisha, we strive to service our customers through giving them
        convenience in purchasing with us while at the same time, balancing our
        focus so as to give our vendors the best of experience to maintain
        sustainability.
      </p>
      <h3>Note: </h3>
      <p style={{ backgroundColor: "yellow" }}>
        The commissioning percentage rates listed here structures from the
        prices an item list in the site.
      </p>
      <h4>
        <i>Example:</i>
      </h4>
      <p>
        If you post an item on Wasilisha, stating its cost as ksh. 10 000, given
        the commissioning rate of that item as 10%, this means that the item
        will be charged a commission of only ksh. 500.
        <p />
      </p>
      <p>The table below shows our commissioning rates</p>

      <h2 style={{ backgroundColor: "purple", color: "white" }}>
        Our Vendor Commissioning Rates
      </h2>

      <table>
        <tr>
          <th>Category</th>
          <th>Commission</th>
        </tr>
        <tr>
          <td>Electronics</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>phones and Tablets</td>
          <td>4%</td>
        </tr>
        <tr>
          <td>Books and stationery</td>
          <td>5%</td>
        </tr>
        <tr>
          <td>Fashion</td>
          <td>7%</td>
        </tr>
        <tr>
          <td>Baby Products</td>
          <td>8%</td>
        </tr>
        <tr>
          <td>Computing</td>
          <td>6%</td>
        </tr>
        <tr>
          <td>Health and Beauty</td>
          <td>6%</td>
        </tr>
        <tr>
          <td>Furnitures</td>
          <td>12%</td>
        </tr>
      </table>

      <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
          <br />
        </div>
      </footer>
    </div>
  );
}
