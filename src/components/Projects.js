import React from "react";
import styled from "styled-components";

let project = [
  {
    id: "1",
    pic: "../assets/food2.jpg",
    title: "FoodPort",
    description:
      "A Mobile application similar to Swiggy, developed using React native along with MongoDB as its backend database. I have used Express API as the intermediate connecting DB and Front-end, and for hosting the app temporarily I had used ngrok server. Food items and search functionalities are availed by retriving data from Yelp API, along with the features of location tracking, login - signup functionalities and saving those tracks.",
    github: "https://github.com/Mathiharan/FoodPortApp.git",
    position: false,
  },
  {
    id: "2",
    pic: "../assets/rest1.jpg",
    title: "Ristorante Con Fusion",
    description:
      "A official website built using React.js for a Restaurant to display their cusines and their administration. Also shows rating for each food items along with customer reviews. Feedback for each food items can be submitted and it will be reflexted dynamically on the same webpage.",
    github: "https://github.com/Mathiharan/React.git",
    position: true,
  },
  {
    id: "3",
    pic: "https://ibb.co/1JMhDnN",
    title: "Re-designed TNSTC Portal",
    description:
      "This is my first project in the college days while learning html, css and javascript. I have just re-designed the login portal of TNSTC bus reservation system with user friendly UI along with many more extraordinary features. The main goal of this project is to retify the flaws in the main Government built web portal and create an amazing new website.",
    github: "https://github.com/Mathiharan/Bus-Reservation-Portal.git",
    position: false,
  },
];

const SetPadding = styled.div`
  padding: 0 0 50px 0;
`;

const ModalWrapper = styled.div`
  width: 1000px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalLImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;

  &:hover {
    opacity: 90%;
  }
`;

const ModalRImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background: #000;

  &:hover {
    opacity: 90%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;

  p {
    margin-bottom: 1rem;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }

  button: hover {
    background: #8cff40;
    color: #000000;
    transition: 0.5s;
  }
`;

function Modal() {
  return (
    <>
      {project.map((item, index) => {
        return (
          <SetPadding>
            <ModalWrapper key={index}>
              {!item.position && <ModalLImg src={item.pic} />}
              <ModalContent>
                <h1 className="">{item.title}</h1>
                <p>{item.description}</p>
                <h6 style={{color: "orange"}}>Go have a look at the project!</h6>
                <a href={item.github} target="_blank">
                  <button onClick={item.github}><i class="fa fa-github fa-lg"></i> Check in Github</button>
                </a>
              </ModalContent>
              {item.position && <ModalRImg src={item.pic} />}
            </ModalWrapper>
          </SetPadding>
        );
      })}
    </>
  );
}

export default Modal;
