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
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Image } from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember: " +
        this.remember.checked
    );
  }
  render() {
    return (
      <React.Fragment>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/home">
              <h3>Mathi's Blog</h3>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav Navbar className="ml-auto">
                <NavItem>
                  <NavLink className="navi nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span>Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/skill">
                    <span className="fa fa-info fa-lg"></span>Skills
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/achievements">
                    <span className="fa fa-list fa-lg"></span>Achievements
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="navi nav-link" to="/contactme">
                    <span className="fa fa-address-card fa-lg"></span>Contact me
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button
                    outline
                    onClick={this.toggleModal}
                    style={{ color: "whitesmoke" }}
                  >
                    <span className="fa fa-sign-in fa-lg"></span>Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron fluid>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-4 ">
                <Image
                  src="../assets/mathi.jpeg"
                  style={{
                    width: 200,
                    height: 220,
                    margin: 0,
                  }}
                  alt="User Image"
                  roundedCircle
                />
              </div>
              <div className="col-12 col-sm">
                <h3>MATHIHARAN T</h3>
                <hr />
                <p>
                  Software Engineer | Full stack Developer | Graphics Designer
                </p>
                <p>
                  Former Design Head at Innovators' Quest VIT | Volleyball
                  Player, Team VIT
                </p>
                <hr />
              </div>
            </div>
          </div>
        </Jumbotron>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={(input) => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
