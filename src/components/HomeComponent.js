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
import "font-awesome/css/font-awesome.min.css";

let Review = [
  {
    id: "1",
    dp: "../assets/sriram.png",
    review: "A Gentle soul with amazing skills who teaches people with such a patience and a great planner indeed. Keep Going!",
    name: "~Sriram G",
  },
  {
    id: "2",
    dp: "../assets/vishal.png",
    review: "Never seen such a down to earth person before. My 'Go to person' tbh. Never hesitated to help and when u go with a problem to him then there's always a solution with him. Stay the same mate!",
    name: "~Vishal P M B",
  },
  {
    id: "3",
    dp: "../assets/arun.png",
    review: "Inspired me with his hard and smart working ability. Always remains cool admist the caotic situations. A Problem Solver!",
    name: "~Arunvikas T",
  },
  {
    id: "4",
    dp: "../assets/ranky.png",
    review: "I still wonder how he tops in whatever he does!! A Multitalented person with huge skills. Yet manages to be the best in everything he does. I know him for past 15yrs, when you are around him entertainment is for sure, Trust me!.... A good selfless human.",
    name: "~Ranjith K",
  },
  {
    id: "5",
    dp: "../assets/sarva.png",
    review: "I worked with him for an club event. It was quite a big event, but our team never felt any stress. His Leadership was so great. Such an awesome personality to be around and learn from!",
    name: "~Sarvagha K",
  },
];

let Skills = [
  {
    id: "1",
    image: "../assets/speak.jpg",
    title: "Speaking Skills & Stand Up Comedy",
    description: "That was a occasion of an 'On Spot Standup performance.'",
  },
  {
    id: "2",
    image: "../assets/volley.jpg",
    title: "Sports",
    description: "A volleyball player since 2016. Selected in VIT Volleyball Squad during 2018.",
  },
  {
    id: "3",
    image: "../assets/artist.jpg",
    title: "Self Made Artist",
    description: "Won numerous prestegious awards from School days.",
  },
  {
    id: "4",
    image: "../assets/poster.jpg",
    title: "Digital Artist & Designer",
    description: "This picture here is designed for a motion poster.",
  },
  {
    id: "5",
    image: "../assets/vb2.jpg",
    title: "My VIT Premiere League Team",
    description:
      "Captained during the VPL Volleyball tournament and lost in a close match.",
  },
  {
    id: "6",
    image: "../assets/dhead.jpg",
    title: "Design Head at Innovators Quest",
    description:
      "After working harder for just 3 months in Iquest Club as Core Committee Member, awarded with the Design Head position. Completed the 1yr tenure successfully this year",
  },
  {
    id: "7",
    image: "../assets/iquest1.jpg",
    title: "Iquest Rivera'20 Team",
    description: "Worked as a Coordinator for the Event conducted by Iquest during Rivera'20 ",
  },
  {
    id: "8",
    image: "../assets/iquest.jpg",
    title: "Innovators Quest Family",
    description: "This Memorable photo is taken on the new Board Announcement day. A Reign Transition day, a day never to forget! 'March 2020'.",
  },
  {
    id: "9",
    image: "../assets/pc.jpg",
    title: "Lema Labs IOT Woskshop at IIT",
    description: "Participated in a 2 days workshop during 2019, on IOT and network programming with basic app development to control the IOT Devices.",
  },
  {
    id: "10",
    image: "../assets/vb.jpg",
    title: "VIT Freshers Tournament'18",
    description: "It's the 1st time we played a Volleyball tournament in VIT. Proud that I captained this  beautiful team. A Team with 'DO or Die Spirit!'",
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
            <CardTitle>
              <b>{item.name}</b>
            </CardTitle>
            {item.designation ? (
              <CardSubtitle>
                <i>{item.designation}</i>
              </CardSubtitle>
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
            <i>
              Hello! My name is <b>Mathiharan T</b> and I'm currently pursuing
              M.tech Integrated software Engineering at VIT University Vellore.
              I'm well versed in Front end development and much interest
              to pursue a career in Fullstack development. Being a Multitalented
              person having a good record in academics could able to maintain a CGPA of 9.33,
              also love sports especially volleyball and used to be part VIT
              volleyball team since 2019.
              <br />
              <br />
              Graphic Designing is my passion after academics, I worked as{" "}
              <b>Design Head</b> during the year 2020 at "Innovators Quest VIT
              Club" which turned out to be career improved phase for me,
              especially in gaining leadership quality by leading a team of more
              than 50 members. I used to do a lot of Graphics designs like
              Mobile App UI, Digital Arts, video editing, Posters as well as
              Motion Posters in Adobe After Effects, Illustrations and many
              more.
            </i>
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
              <CardTitle tag="h6">Advisory Board Member</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Feb 2021 - Present . 4 mos
              </CardSubtitle>
              <CardTitle tag="h6">Design Head</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Mar 2020 - Feb 2021 - 1yr
              </CardSubtitle>
              <CardText>
                Organizing all the Graphics Design activities in the club.
                <br />
                Worked as a Co-ordinator in INNOVATORS FEST'20.
              </CardText>
              <CardTitle tag="h6">Core Committee Member</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Nov 2019 - Mar 2020 - 5 mos
              </CardSubtitle>
              <CardText>Worked in the Design Team.</CardText>
            </CardBody>

            <CardHeader tag="h5">
              <i class="fa fa-leanpub fa-lg"></i> Acadergy
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Acadergy . Self-employed</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Feb 2021 - Mar 2021 - 2 mos
              </CardSubtitle>
              <CardText>
                Worked as a Design manager for a start up company Initially.
                <br />
                Due to personal reasons discontinued later.
              </CardText>
            </CardBody>

            <CardHeader tag="h5">
              <i class="fa fa-futbol-o fa-lg"></i> Volleyball Team VIT
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Volleyball Player</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                2019 - Present . 2yrs
              </CardSubtitle>
              <CardText>
                Captained Volleyball team twice VIT Premier League(2019,2020).
              </CardText>
            </CardBody>

            <CardHeader tag="h5">
              <i class="fa fa-desktop fa-lg"></i> Mozilla Firefox Club VIT
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Core Committe Member</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Nov 2019 - Oct 2020 . 1 yr
              </CardSubtitle>
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
                    <h3 className="styleText">{item.title}</h3>
                    <p className="stylePara">
                      <h6>{item.description}</h6>
                    </p>
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
