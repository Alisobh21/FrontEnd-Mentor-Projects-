import React from "react";

function Services() {
  return (
    <div className="content services">
      <hr className="hr-services" />
      <h1>We’re different</h1>
      <div className="services-items">
        <div className="box">
          <img src="icon-snappy-process.svg" alt="" />
          <h4>Snappy Process</h4>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>

        <div className="box">
          <img src="icon-affordable-prices.svg" alt="" />
          <h4> Affordable Prices</h4>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>

        <div className="box">
          <img src="icon-people-first.svg" alt="" />
          <h4>People First</h4>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
