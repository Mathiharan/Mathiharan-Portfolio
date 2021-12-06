import React from "react";
import { Breadcrumb, BreadcrumbItem, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import Modal from "./Projects";

let data = [
  {
    name: "Reactive Web & App Development",
    text: "My goal is to become a well established Full stack developer or we can also say a 'MERN' stack developer to be precise. Everything started with HTML, CSS and Javascript as the kick start to my career. I never learnt these languages separately, as I started working on a TNSTC model portal web development I came to understand these languages and did a code and fix model approach to learnt the same. Then completed a 3 months bootstrap course in Coursera, certified from Hong Kong University. Following this, started learning React js in the same university in Coursera with practical experience. But took around some 6 months to complete due to personal health issues & yet managed to complete the certification course. Then completed React native in Udemy again learning for some 4 months and created a Swiggy like FOODPORT app. Side by side came to learn the basics of Git, GitHub, MongoDB, npm, yarn, json etc., And now completed 4 website projects and 1 Mobile application using these knowledge. I'm sure that I'm on my way to conquer Node Js and MongoDB with Express soon. This Train never stops until it reaches it's destination!",
  },
  {
    name: "Arts & Video Editing",
    text: "I'm an self made artist from childhood. It's been my hobby and now turned into my passion. As growing up as a artist, I used to win a lot of district and state level contest with trophies and cash award. Won 1st prize in district level drawing competition in the year 2018 and received cash prize of 10k from the hands of Minister Pon Radha Krishnan was one of my favourites. As this fire later turned into digitalized works, since I was rejected in some 6 club interviews in my 1st year. So, I learnt Adobe photoshop and cracked 4 out of 6 interviews the very next year. Now I'm well versed in making portrait illustrations, posters, movie motion posters, digital arts, etc.., And to promote this to the world, I started to do video editing in after effects and filmora then releasing those in Instagram as a professional Designer. You can check out my instagram page to view my art and video editing works!",
  },
  {
    name: "Leadership Ability",
    text: "One of my biggest strength is to remain calm and handle the situation according to the environment by understanding each and everyone's perspective of the problem. I guess this makes me a 'Good Leader'. I usually think two steps ahead and do a mind forecasting of every possibility that may happen and will be ready with the solution if that happens. This makes my work a lot easier, as when it comes to leadership, the team needs a clarity in goal and thinking of how we gonna work. To showcase my leadership skills, I'm currently working as a Advisory Board Member at Innovators Quest Club VIT Vellore, and former Design Head in the same, which had a core design team of more than 20 members. Captained Volleyball team in VIT Premiere League twice in 2019, 2020 and also cricket team in 2020. Worked as a Event Organiser in Rivera'2020 and IFest'20 at Iquest.",
  },
];

let badge = [
  {
    id: "0",
    name: "React Js",
  },
  {
    id: "1",
    name: "React Native",
  },
  {
    id: "2",
    name: "Adobe Photoshop",
  },
  {
    id: "3",
    name: "Adobe Illustrator",
  },
  {
    id: "4",
    name: "Adobe XD",
  },
  {
    id: "5",
    name: "AWS",
  },
  
  {
    id: "7",
    name: "After Effect",
  },
  {
    id: "8",
    name: "C",
  },
  {
    id: "9",
    name: "Front-end Development",
  },
  {
    id: "10",
    name: "C++",
  },
  {
    id: "11",
    name: "MongoDB",
  },
  {
    id: "12",
    name: "Wondershare Filmora",
  },
  {
    id: "13",
    name: "GitHub",
  },
  {
    id: "14",
    name: "JSON",
  },
  {
    id: "15",
    name: "Python",
  },
  {
    id: "16",
    name: "Java",
  },
  {
    id: "17",
    name: "npm",
  },
  {
    id: "18",
    name: "Expo",
  },
  {
    id: "19",
    name: "App Development",
  },
  {
    id: "20",
    name: "Git",
  },
  {
    id: "21",
    name: "DBMS",
  },
  {
    id: "22",
    name: "Data Structures",
  },
  {
    id: "23",
    name: "Redux Thunk",
  },
  {
    id: "24",
    name: "Action-Context",
  },
  {
    id: "25",
    name: "HTML",
  },
  {
    id: "26",
    name: "SCSS",
  },
];

class Tabs extends React.Component {
  constructor() {
    super();

    this.state = {
      activeTab: 0,
      data: data,
    };

    this.changeTabOnClick = this.changeTabOnClick.bind(this);
  }

  changeTabOnClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    return (
      <div className="tabs-body">
        <TabHeader
          data={this.state.data}
          click={this.changeTabOnClick}
          activeId={this.state.activeTab}
        />
        <TabContent data={this.state.data} activeId={this.state.activeTab} />
      </div>
    );
  }
}

class TabHeader extends React.Component {
  doClick(index, event) {
    this.props.click(index);
  }

  render() {
    let activeClass = this.props.activeId;

    let tabs = this.props.data.map((item, index) => {
      return (
        <li className={activeClass === index ? "active" : ""}>
          <a onClick={this.doClick.bind(this, index)}>
            <span>{item.name}</span>
          </a>
        </li>
      );
    });

    return <ul className="tabs-header">{tabs}</ul>;
  }
}

class TabContent extends React.Component {
  render() {
    let activeClass = this.props.activeId;

    let content = this.props.data.map((item, index) => {
      return (
        <div
          className={"tabs-textItem " + (activeClass === index ? "show" : "")}
        >
          <p>{item.text}</p>
        </div>
      );
    });

    return <div className="tabs-content">{content}</div>;
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

            <div className="col-12 col-md">
              <div className="container row">
                {badge.map((item, index) => {
                  return (
                    <div className="bdg">
                      <Badge key={index} variant="primary">
                        {item.name}
                      </Badge>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-12 col-md">
            <h3>Project Works</h3>
            <hr className="hr" />
          </div>
          <div className="row row-content">
            <div className="col-12 col-md">
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
