import React, { useState } from "react";
import styled from "styled-components";
import StartingButtonComponent from "../compontents/StartingButtonComponent";
import { IoBeerSharp } from "react-icons/io5";
import QuizPage from "./QuizPage";

const Wrapper = styled.div`
  display: ${(props) => (props.welcome === true ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #fff;
  padding-top: 6.5rem;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 1.5px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.15, 0.4, 0.15, 0.5);
`;

const Intro = styled.div`
  font-family: "Jalnan";
  font-size: 2.1rem;
  font-weight: 300;
  color: #a7a7a7;
`;

const Title = styled.div`
  font-family: "Jalnan";
  font-size: 3.7rem;
  font-weight: 400;
  padding-top: 70px;
  margin-bottom: 7.5rem;
  color: #232321;
`;

const Footer = styled.div`
  font-family: "Oswald";
  font-size: 1.5rem;
  font-weight: 200;
  text-align: center;
  margin-top: 8rem;
  color: #a7a7a7;
  padding-bottom: 4rem;
`;

/** StartingPage Function */
const StartingPage = () => {
  const [welcome, setWelcome] = useState(true);
  const [quizTime, setQuizTime] = useState(false);

  const onClickStartBtn = () => {
    setWelcome(false);
    setQuizTime(true);
  };

  return (
    <>
      <Wrapper welcome={welcome}>
        <Container>
          <Intro>
            여러분의 맥주 취향을 찾기 위해 <br /> 오늘도 야근하는 내 이름은
          </Intro>
          <Title>
            BEER DOBBY <IoBeerSharp />
          </Title>
          <StartingButtonComponent
            type={true}
            text={"시작하기"}
            onclick={onClickStartBtn}
          />
          <Footer>made by heeChang</Footer>
        </Container>
      </Wrapper>
      <QuizPage welcome={quizTime} />
    </>
  );
};

export default StartingPage;
