import React from "react";
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
} from "reactstrap";
import { Image } from "react-bootstrap";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

let Review = [
  {
    id: "1",
    dp: "../assets/sriram.png",
    review: "He is such an amazing student with multi talented skills",
    name: "~Sriram G",
  },
  {
    id: "2",
    dp: "../assets/vishal.png",
    review: "He is such an amazing student with multi talented skills",
    name: "~Vishal P M B",
  },
  {
    id: "3",
    dp: "../assets/arun.png",
    review: "He is such an amazing student with multi talented skills",
    name: "~Arunvikas T",
  },
  {
    id: "4",
    dp: "../assets/ranky.png",
    review: "He is such an amazing student with multi talented skills",
    name: "~Ranjith K",
  },
  {
    id: "5",
    dp: "../assets/sarva.png",
    review: "He is such an amazing student with multi talented skills",
    name: "~Sarvagha K",
  },
];

let Skills = [
  {
    id: "1",
    image: "../assets/speak.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "2",
    image: "../assets/vb1.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "3",
    image: "../assets/artist.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "4",
    image: "../assets/poster.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "5",
    image: "../assets/vb2.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "6",
    image: "../assets/dhead.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "7",
    image: "../assets/iquest1.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "8",
    image: "../assets/iquest.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "9",
    image: "../assets/pc.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
  {
    id: "10",
    image: "../assets/vb.jpg",
    title: "Sports",
    description: "A volleyball player since 2016",
  },
];

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else {
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card className="cardfont">
          <CardImg src={baseUrl + item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? (
              <CardSubtitle>{item.designation}</CardSubtitle>
            ) : null}
            <CardText>{item.description}</CardText>
          </CardBody>
        </Card>
      </FadeTransform>
    );
  }
}

function Home(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="col-12 col-md m-1 pageBody">
          <h3>About Me</h3>
          <hr className="hr" />
        </div>
        <div className="col-12 col-md-12 m-1">
          <p>
            I'm well versed in Front end development and have a high interest to
            pursue a career in Fullstack development. Since I'm a multitalented
            person having a good record in academics, sports especially
            volleyball and also much talented graphics designer.
          </p>
        </div>
        <div className="row align-items-start">
          <div className="col-12 col-md-12 m-1 pageBody">
            <h3>Services What I offer</h3>
            <hr className="hr" />
          </div>
          <div className="col-12 col-md-4 ">
            <RenderCard
              item={props.leader}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
          </div>
          <div className="col-12 col-md-4 ">
            <RenderCard
              item={props.leader1}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
          </div>
          <div className="col-12 col-md">
            <RenderCard
              item={props.leader2}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
          </div>
        </div>
        <div className="col-12 col-md m-1 pageBody">
          <h3>Experience</h3>
          <hr className="hr" />
        </div>
        <div className="col-12 col-md m-1 cardfont">
          <Card>
            <CardHeader tag="h5">
              <i class="fa fa-book fa-lg"></i> Innovators Quest
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Design Head</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Mar 2020 - Feb 2021 - 1yr
              </CardSubtitle>
              <CardText>
                Organizing all the Graphics Design activities in the club.
                <br />
                Worked as a Co-ordinator in INNOVATORS FEST'20.
              </CardText>
              <CardTitle tag="h6">Design Head</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Mar 2020 - Feb 2021 - 1yr
              </CardSubtitle>
              <CardText>
                Organizing all the Graphics Design activities in the club.
                <br />
                Worked as a Co-ordinator in INNOVATORS FEST'20.
              </CardText>
            </CardBody>
            <CardHeader tag="h5">
              <i class="fa fa-book fa-lg"></i> Innovators Quest
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Design Head</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Mar 2020 - Feb 2021 - 1yr
              </CardSubtitle>
              <CardText>
                Organizing all the Graphics Design activities in the club.
                <br />
                Worked as a Co-ordinator in INNOVATORS FEST'20.
              </CardText>
              <CardTitle tag="h6">Design Head</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Mar 2020 - Feb 2021 - 1yr
              </CardSubtitle>
              <CardText>
                Organizing all the Graphics Design activities in the club.
                <br />
                Worked as a Co-ordinator in INNOVATORS FEST'20.
              </CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md m-1 pageBody">
          <h3>Showcased Other Skills</h3>
          <hr className="hr" />
        </div>
        <div className="col-12 col-md m-1">
          <Carousel>
            {Skills.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt="Skills"
                  />
                  <CarouselCaption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </CarouselCaption>
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
        <div className="col-12 col-md m-1 pageBody">
          <h3>Viewers Review</h3>
          <hr className="hr" />
        </div>
        <div className="col-12 col-md-12">
          <Carousel>
            {Review.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <div className="d-flex justify-content-center">
                    <Image
                      src={item.dp}
                      className="circleimg"
                      alt="#"
                      roundedCircle
                    />
                  </div>
                  <blockquote className="d-flex justify-content-center">
                    <q>{item.review}</q>
                  </blockquote>
                  <div className="testimonial-author d-flex justify-content-center">
                    <p>
                      <strong>{item.name}</strong>
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </Carousel>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
