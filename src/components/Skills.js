import React, { Component } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Row,
  Label,
  Col,
} from "reactstrap";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function Skills(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home/">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Skills and Projects</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Skills and Projects</h3>
            <hr />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
