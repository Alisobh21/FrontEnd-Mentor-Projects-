import React from "react";
import "./Testimonials.css";
function Testimonials() {
  return (
    <div className="testimonials">
      <h3>Client testimonials</h3>
      <div className="t-cards">
        <div className="client">
          <img src="/image-emily.jpg" alt="" />
          <p className="desc">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <p className="name">Emily R.</p>
          <small className="job">Marketing Director</small>
        </div>

        <div className="client">
          <img src="image-thomas.jpg" alt="" />
          <p className="desc">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <p className="name">Thomas S.</p>
          <small className="job">Chief Operating Officer</small>
        </div>

        <div className="client">
          <img src="image-jennie.jpg" alt="" />
          <p className="desc">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <p className="name">Jennie F.</p>
          <small className="job"> Business Owner</small>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
