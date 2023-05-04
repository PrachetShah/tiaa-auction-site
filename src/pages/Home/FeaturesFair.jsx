import React from "react";
import "./InternshipFair.css";
// import stipend from "../Assets/stipend.png";

const FeaturesFair = () => {
  return (
    <div id="Perks">

      <div style={{ padding: "150px 0 150px 60px" }} className="featuresfair">
        <div style={{ paddingLeft: "50px" }} className="feature">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div className="featuresHead">OPPORTUNITIES</div>
            <span className="featuresSpan"></span>
          </div>
          <div className="featuresContent">
            Internships are available in both technical and non-technical fields.
          </div>
        </div>
        <div className="growth">
          <div className="featuresHead">GROWTH</div>
          <div className="featuresContent">
            Since the inception of DJSCE ACM's internship fair,
            we've been able to attract a higher number of employers
            to visit and recruit in a variety of fields.
          </div>
        </div>
        <div style={{ paddingLeft: "50px" }} className="feature">
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* <img src={stipend} alt="" className="stipendImg" /> */}
            <div className="StipendHead">STIPEND</div>
          </div>
          <div className="StipendContent">
            The internship can be scheduled in July, after the semester officially ends for one month of
            full-time work.
          </div>
        </div>
      </div>
    </div>

  );
};

export default FeaturesFair;