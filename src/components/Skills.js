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
  Badge,
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
import Modal from "./Projects";

let data = [
  {
      name: 'Tab001',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores nihil, nisi, voluptate ad quis ea omnis quidem minima fugit adipisci, porro ut velit officiis natus eligendi autem inventore dolor fuga unde nesciunt expedita, beatae officia nostrum labore. Reiciendis, commodi adipisci eius est recusandae ipsa incidunt repellat explicabo nobis corporis debitis non ullam, eos itaque, quia, iste repudiandae. Iusto numquam consectetur quo, et, quis deleniti ipsam eaque perferendis. Repellat ad, molestiae id deserunt praesentium distinctio similique nesciunt itaque. Repellat error enim blanditiis esse, odio commodi exercitationem nostrum perferendis veniam quod, recusandae provident aspernatur aliquam placeat odit cumque fugit ducimus, voluptatibus ad?'
  },
  {
      name: 'Tab002',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores perspiciatis repellat soluta dolorum, quam quos possimus atque rerum porro voluptate beatae dolor incidunt! Corporis, tempore quasi fugit est. Ex, quae!Aliquam nulla explicabo facilis, consequuntur tenetur! Rem architecto veritatis quo corporis sapiente nesciunt culpa at enim similique officiis adipisci in commodi suscipit, natus facilis, repellat laboriosam eaque obcaecati quaerat vero!'
  },
  {
      name: 'Tab003',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem minus similique architecto sequi delectus non, nobis consequuntur officia, laboriosam reiciendis ea! Natus iste quas perspiciatis magnam repellat, voluptate excepturi esse.'
  }
];

class Tabs extends React.Component {
  constructor() {
      super();

      this.state = {
          activeTab: 0,
          data: data
      }

      this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }

  changeTabOnClick(index) {
      this.setState({
          activeTab: index
      });
  }

  render() {
      return (
          <div className="tabs-body">
              <TabHeader data={this.state.data}
                            click={this.changeTabOnClick}
                            activeId={this.state.activeTab} />
              <TabContent data={this.state.data}
                             activeId={this.state.activeTab} />
          </div>
      )
  }
}

class TabHeader extends React.Component {
  doClick(index, event) {
      this.props.click(index);
  }

  render() {
      let activeClass = this.props.activeId;

      let tabs = this.props.data.map((item, index) => {
          return <li className={(activeClass === index ? 'active' : '')}>
                      <a onClick={this.doClick.bind(this, index)} ><span>{item.name}</span></a>
                  </li>
      });

      return (
          <ul className="tabs-header">{tabs}</ul>
      )
  }

}

class TabContent extends React.Component {
  render() {
      let activeClass = this.props.activeId;

      let content = this.props.data.map((item, index) => {
          return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text}</p></div>
      });

      return (
          <div className="tabs-content">{content}</div>
      );
  }
}

//React.render(<Tabs />, document.querySelector('.tabs'));




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
            <h3>My Skills</h3>
            <hr className="hr" />
          </div>
          <div className="row row-content">
            <div className="col-12 col-md-8">
              <Tabs />
            </div>
            <div className="col-md-1">
              <hr className="verthr"/>
            </div>
            <div className="col-12 col-md">
              <Badge variant="primary" className="badge">Primary</Badge>
              <Badge variant="primary" >Primary</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="primary">Primary</Badge>
            </div>
          </div>
          <div className="col-12">
            <h3>Project Works</h3>
            <hr className="hr" />
          </div>
          <div className="row row-content">
            <div className="col-12 col-md-8">
            <Modal />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
