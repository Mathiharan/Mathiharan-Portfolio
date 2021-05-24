import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-md-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/skill">Skills</Link>
              </li>
              <li>
                <Link to="/achievements">Achievements</Link>
              </li>
              <li>
                <Link to="/contactme">Contact Me</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-md-5">
            <h5>Address</h5>
            <address>
              12/23, Krishnapillai Street,
              <br />
              Sainathapuram, Vellore
              <br />
              Tamilnadu, India
              <br />
              <i className="fa fa-phone fa-lg"></i>: +91 9629773239
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:mathiharan.t2018@gmail.com">mathiharan.t2018@gmail.com</a>
            </address>
          </div>
          <div className="col-12 col-md-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-google"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i style={{color: "white"} } className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2021 Mathi's Blog</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
