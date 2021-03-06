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
/*import { Loading } from "./LoadingComponent";*/
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";
import "font-awesome/css/font-awesome.min.css";

let Service = [
  {
    id: 0,
    name: "Budding Software Engineer",
    image: "../assets/ser4.jpg",
    designation: "A Rookie!",
    description:
      "Software Engineering is my main area of working. From requirements gathering till Software deployment and repetative updation and testing, I'm well knowledged about each of these concepts and flows. As an emerging Software Engineer with much needed variant skillset required recently in industries, I provide the knowledge of Software Requirement Process, Agile Developement, software Configuration Management, Software Project Management, Software Security, Software Architecture and Design and Software Testing. Learning each of these above concepts in a practical cum theory based method gives me an upper hand!",
  },
  {
    id: 1,
    name: "A Full Stack Developer",
    image: "../assets/ser3.jpg",
    designation: "An Intermediate Developer!",
    description:
      "With my heart goes to Web development and App development, I provide the best effort in doing any work when it comes to Full Stack Development. My journey Started with HTMl, JS and CSS, as time passed now I'm quite familiar with React Js, React Native, Bootstrap, MongoDB, Git, Json Server, npm packages. I had completed react js and react native certification courses in Coursera & Udemy respectively with practical knowledge. And also did few projects such as a bus reservation TNSTC remodelled Portal, FOOD PORT App similar to Swiggy and even consider this Mathi's Blog website, which was built in React JS. I'm confident enough about my Front End Dev Skills!",
  },
  {
    id: 2,
    name: "Creative Graphics Designer",
    image: "../assets/ser1.jpg",
    designation: "An Expert in Field!",
    description:
      "My thirst to do creative things with the Adobe family never ends ;P !! I'm pretty much an expert in Photoshop with 2yrs of experience. I also worked as Design Head in Innovators Quest leading my team from front and shared my knowledge and skills with many juniors in my team. My other expertise tools are Adobe Illustator, After Effects, Filmora. A beginner in Adobe Media Encoder. My line then shifted as a UI by practicing Adobe XD while working on some front end projects. Having 2 months experience as a Design Manager in a Startup Company Acadergy. I'm sure a lot more posters, video editing, motion posters, infographics, digital arts are coming up!",
  },
];

let Review = [
  {
    id: "1",
    dp: "../assets/sriram.png",
    review:
      "A Gentle soul with amazing skills who teaches people with such a patience and a great planner indeed. Keep Going!",
    name: "~Sriram G",
  },
  {
    id: "2",
    dp: "../assets/vishal.png",
    review:
      "Never seen such a down to earth person before. My 'Go to person' tbh. Never hesitated to help and when u go with a problem to him then there's always a solution with him. Stay the same mate!",
    name: "~Vishal P M B",
  },
  {
    id: "3",
    dp: "../assets/arun.png",
    review:
      "Inspired me with his hard and smart working ability. Always remains cool admist the caotic situations. A Problem Solver!",
    name: "~Arunvikas T",
  },
  {
    id: "4",
    dp: "../assets/ranky.png",
    review:
      "I still wonder how he tops in whatever he does!! A Multitalented person with huge skills. Yet manages to be the best in everything he does. I know him for past 15yrs, when you are around him entertainment is for sure, Trust me!.... A good selfless human.",
    name: "~Ranjith K",
  },
  {
    id: "5",
    dp: "../assets/sarva.png",
    review:
      "I worked with him for an club event. It was quite a big event, but our team never felt any stress. His Leadership was so great. Such an awesome personality to be around and learn from!",
    name: "~Sarvagha K",
  },
];

let Skills = [
  {
    id: "1",
    image: "../assets/speak.jpg",
    title: "Speaking Skills & Stand Up Comedy",
    description: "That was an occasion of an 'On Spot Standup performance.'",
  },
  {
    id: "2",
    image: "../assets/volley.jpg",
    title: "Sports",
    description:
      "A volleyball player since 2016. Selected in VIT Volleyball Squad during 2018.",
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
    title: "Iquest Riviera'20 Team",
    description:
      "Worked as a Coordinator for the Event conducted by Iquest during Riviera'20 ",
  },
  {
    id: "8",
    image: "../assets/iquest.jpg",
    title: "Innovators Quest Family",
    description:
      "This Memorable photo is taken on the new Board Announcement day. A Reign Transition day, a day never to forget! 'March 2020'.",
  },
  {
    id: "9",
    image: "../assets/pc.jpg",
    title: "Lema Labs IOT Workshop at IIT",
    description:
      "Participated in a 2 days workshop during 2019, on IOT and network programming with basic app development to control the IOT Devices.",
  },
  {
    id: "10",
    image: "../assets/vb.jpg",
    title: "VIT Freshers Tournament'18",
    description:
      "It's the 1st time we played a Volleyball tournament in VIT. Proud that I captained this  beautiful team. A Team with 'DO or Die Spirit!'",
  },
];

{
  /*function RenderCard({ item, isLoading, errMess }) {
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
          <CardImg src={item.image} alt={item.name} />
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
} */
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
              I'm well versed in Front end development and much interest to
              pursue a career in Fullstack development. Being a Multitalented
              person having a good record in academics could able to maintain a
              CGPA of 9.29, also love sports especially volleyball and used to
              be part VIT volleyball team since 2019.
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
          <div className="row">
            {Service.map((item, index) => {
              return (
                <div key={index} className="col-12 col-md-4">
                  <FadeTransform
                    in
                    transformProps={{
                      exitTransform: "scale(0.5) translateY(-50%)",
                    }}
                  >
                    <Card key={index} className="cardfont">
                      <CardImg src={item.image} alt={item.name} />
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
                </div>
              );
            })}
            {/*
            <RenderCard
              item={props.leader}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
            */}
          </div>
          <div className="col-12 col-md-4 ">
            {/*
            <RenderCard
              item={props.leader1}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
            */}
          </div>
          <div className="col-12 col-md">
            {/*
            <RenderCard
              item={props.leader2}
              isLoading={props.leadersLoading}
              errMess={props.leadersErrMess}
            />
            */}
          </div>
        </div>
        <div className="col-12 col-md m-1 pageBody">
          <h3>Experience</h3>
          <hr className="hr" />
        </div>
        <div className="col-12 col-md m-1 cardfont">
          <Card>
            <CardHeader tag="h5">
              <i class="fa fa-cubes fa-lg"></i> E-Cell IIT Madras
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Campus Ambassador</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Nov 2021 - Present
              </CardSubtitle>
              <CardText>
                Shortlisted as the "Campus Ambassador" to represent
                <br />
                E-Cell IIT Madras at VIT Vellore ("CAP tenure 2021-22).
                <br />
                Also as an Intern at E-Cell IIT Madras.
              </CardText>
            </CardBody>

            <CardHeader tag="h5">
              <i class="fa fa-book fa-lg"></i> Innovators Quest
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Advisory Board Member</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                Feb 2021 - Present
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
              </CardText>
            </CardBody>

            <CardHeader tag="h5">
              <i class="fa fa-futbol-o fa-lg"></i> Volleyball Team VIT
            </CardHeader>
            <CardBody>
              <CardTitle tag="h6">Volleyball Player</CardTitle>
              <CardSubtitle className="mb-2 text-muted">
                2019 - Present
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
