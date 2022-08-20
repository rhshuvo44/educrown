import React from "react";
import { FaGraduationCap, FaRocket } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import "./Features.css";

const Features = () => {
  return (
    <div id="fearuture" className="container-fluid py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="container shadow-lg p-5">
            <div className="row">
              <div className="col-md-4">
                <div className="iconBox">
                  <FaGraduationCap className="icons" />
                </div>
                <h2>Certificate</h2>
                <p>
                  A Google Docs scam that appears to be widespread began landing
                  in Wednesday in what seemed to be a phishing attack.
                </p>
              </div>
              <div className="col-md-4">
                <div className="iconBox">
                  <FcBusinessman className="icons" />
                </div>
                <h2>Certificate</h2>
                <p>
                  A Google Docs scam that appears to be widespread began landing
                  in Wednesday in what seemed to be a phishing attack.
                </p>
              </div>
              <div className="col-md-4">
                <div className="iconBox">
                  <FaRocket className="icons" />
                </div>
                <h2>Certificate</h2>
                <p>
                  A Google Docs scam that appears to be widespread began landing
                  in Wednesday in what seemed to be a phishing attack.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 text-center py-5">
          <div className="container px-5">
            <div className="row">
              <div className="col-md-12 px-5">
                <h2>Educrown is trusted by 50,000+ student.</h2>
                <p className="px-5">
                  Microsoft has spent a lot of time trying to make Windows
                  self-repairing, partly because it generally gets the blame
                  when other programs or users try to improve” it. Given that
                  tens of thousands of expert programmers have worked on the
                  code over the past 30 years.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 py-5 text-white" id="features-buttom">
          <div className="container py-5">
            <div className="row">
              <div className="col-md-3">
                <h2 className="fs-1 fw-bold">20k</h2>
                <p className="fw-bold">Graduated Students</p>
              </div>
              <div className="col-md-3">
                <h2 className="fs-1 fw-bold">124</h2>
                <p className="fw-bold">Expert Instructors</p>
              </div>
              <div className="col-md-3">
                <h2 className="fs-1 fw-bold">600k</h2>
                <p className="fw-bold">Books in our library</p>
              </div>
              <div className="col-md-3">
                <h2 className="fs-1 fw-bold">15k</h2>
                <p className="fw-bold">Students get employed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
