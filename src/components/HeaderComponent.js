import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
} from "reactstrap";
//import axios from "axios";
//import fileDownload from "js-file-download";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";
//import { baseUrl } from "../shared/baseUrl";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    //    this.handleDownload = this.handleDownload.bind(this);
  }

  /*  handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };
*/

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md" className="fixed-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/home">
              <h3>Mathi's Blog</h3>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav Navbar className="ml-auto">
                <NavItem>
                  <NavLink className="navi nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/skill">
                    <span className="fa fa-info fa-lg"></span> Skills and
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/achievements">
                    <span className="fa fa-list fa-lg"></span> Achievements
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/contactme">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    me
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron fluid>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-md-4 ">
                <Image
                  src="../assets/Portf1.png"
                  style={{
                    width: 250,
                    height: 250,
                    margin: 0,
                  }}
                  alt="User Image"
                  roundedCircle
                />
              </div>
              <div className="col-12 col-md">
                <h3>MATHIHARAN T</h3>
                <hr />
                <p>
                  Student at VIT Vellore | Software Engineer | Full stack
                  Developer | AWS Certified Cloud Practioner | Graphics Designer
                  (UI)
                </p>
                <p>
                  Campus Ambassador of E-Cell IIT Madras | Former Design Head at
                  Innovators' Quest VIT | Former Core Committee member at
                  Mozilla Firefox Club VIT | Volleyball Player, Team VIT
                </p>
                <hr />
                {/*<Button
                  onClick={() => {
                    this.handleDownload(
                      baseUrl+"assets/Profile.pdf",
                      "Profile.pdf"
                    );
                  }}
                >*/}
                <a href="https://github.com/Mathiharan" target="_blank">
                  <Button>Github Acc.</Button>
                </a>
              </div>
            </div>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default Header;
