import React from "react";
import styled from "styled-components";

let project = [
  {
    id: "1",
    pic: "../assets/modal.jpg",
    title: "Altered TNSTC Bus Reservation Portal",
    description:
      "This is my first project in the college days while learning html, css and javascript.",
    github: "",
    position: false,
  },
  {
    id: "2",
    pic: "../assets/modal.jpg",
    title: "Restaurnate Confusion",
    description:
      "A official website build for a Restaurant to display their cusines and about the administration. Also shows rating for each food items along with customer reviews",
    github: "",
    position: true,
  },
  {
    id: "3",
    pic: "../assets/modal.jpg",
    title: "FoodPort",
    description:
      "A Mobile application similar to Swiggy developed using React Js and by retriving data from Yelp API, with the features of location tracking, food searching etc...",
    github: "",
    position: false,
  },
];

const SetPadding = styled.div`
  padding: 0 0 50px 0;
`;

const ModalWrapper = styled.div`
  width: 800px;
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
`;

const ModalRImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background: #000;
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

  button: hover{
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
              { !item.position && <ModalLImg src={item.pic} />}
              <ModalContent>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button onClick={item.github}>Check in Github</button>
              </ModalContent>
              { item.position && <ModalRImg src={item.pic} />}
            </ModalWrapper>
          </SetPadding>
        );
      })}
    </>
  );
}

export default Modal;
