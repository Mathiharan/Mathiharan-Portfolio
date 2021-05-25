import React from "react";
// { Carousel, CarouselItem } from "react-bootstrap";
//import CarouselCaption from "react-bootstrap/CarouselCaption";
//import ImageShadow from "react-image-shadow";
import "react-image-shadow/assets/index.css";
import styled from "styled-components";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
//import { Loading } from "./LoadingComponent";
//import { baseUrl } from "../shared/baseUrl";
//import { FadeTransform } from "react-animation-components";

const ImageWrapper = styled.div`
  justify-content: center;
  align-items: center;
  text-align: center;
  zIndex: 0;
`;

const TextOn = styled.div`
  position: relative;
  top: -20%;
  color: white;
  zIndex: 1;
`;

/*padding-left: 20px;
  padding-right: 20px;
  zindex: 0px;*/

function Achievements(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Achievements</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Achievements</h3>
            <hr className="hr" />
          </div>
          <div className="col-12">
            <App data={data} />
            {app}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const app = document.getElementById("app");
const data = [
  {
    id: 1,
    name: "Island",
    heading: "Volleyball",
    image:
      "../assets/iq.jpg",
  },
  {
    id: 2,
    name: "Forest",
    heading: "Volleyball",
    image:
      "../assets/BOG.jpg",
  },
  {
    id: 3,
    name: "Whale",
    heading: "Volleyball",
    image:
      "../assets/art.jpg",
  },
  {
    id: 4,
    name: "Mountain",
    heading: "Volleyball",
    image:
      "../assets/head.jpg",
  },
  {
    id: 5,
    name: "Boat",
    heading: "Volleyball",
    image:
      "../assets/board.jpg",
  },
  {
    id: 6,
    name: "Flowers",
    heading: "Volleyball",
    image:
      "../assets/merit.jpg",
  },
  {
    id: 7,
    name: "Fire",
    heading: "Volleyball",
    image:
      "../assets/cert.jpg",
  },
  {
    id: 8,
    name: "Garden",
    heading: "Volleyball",
    image:
      "../assets/enigma.jpg",
  },
  {
    id: 9,
    name: "Bridge",
    heading: "Volleyball",
    image:
      "../assets/react.jpg",
  },
];

class App extends React.Component {
  render() {
    return <Tiles data={this.props.data} />;
  }
}

class Tiles extends React.Component {
  render() {
    // Create tile for each item in data array
    // Pass data to each tile and assign a key
    return (
      <div className="tiles">
        {this.props.data.map((data) => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false,
    };
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true,
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true,
      });
    } else {
      this.setState({
        open: false,
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    let textStyle = {};
    // When tile clicked
    if (this.state.open) {
      tileStyle = {
        width: "62vw",
        height: "62vw",
        position: "absolute",
        top: "50%",
        left: "50%",
        margin: "0",
        marginTop: "-31vw",
        marginLeft: "-31vw",
        zIndex: "2",
        boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        transform: "none",
      };
      textStyle = {
        width: "20vw",
        height: "20vw",
        position: "absolute",
        top: "70%",
        left: "35%",
        margin: "0",
        zIndex: "4",
        marginTop: "0vw",
        marginLeft: "0vw",
        transform: "none",
        fontSize: "50px"
      };
    } else {
      tileStyle = {
        width: "18vw",
        height: "18vw",
        zIndex: "0",
      };
      textStyle = {
        position: "relative",
        top: "-20%",
        color: "white",
        zIndex: "1",
      };
    }

    return (
      <>
        <ImageWrapper>
          <div className="tile">
            <img
              onMouseEnter={this._mouseEnter}
              onMouseLeave={this._mouseLeave}
              onClick={this._clickHandler}
              src={this.props.data.image}
              alt={this.props.data.name}
              style={tileStyle}
            />
          </div>
          <TextOn style={textStyle}>{this.props.data.name}</TextOn>
        </ImageWrapper>
      </>
    );
  }
}

//ReactDOM.render(<App data={data} />,app);

export default Achievements;
