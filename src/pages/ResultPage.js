import React from "react";
import Parser from "html-react-parser";
import styled from "styled-components";

import results from "./contents/results";
import { NavLink, useParams } from "react-router-dom";
import ButtonComponent from "../compontents/ButtonComponent";
import CopyToClipboard from "react-copy-to-clipboard";
import LinkCopyBtn from '../assets/btn/btn_link.svg'
import KaKaoShareBtn from '../compontents/kakao';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};

  flex-direction: column;
  align-items: center;
  
`;

const Container = styled.div`
  margin-top: 8.6rem;
  margin-bottom: 3rem;
`;

const ResultSub = styled.div`
  font-family: "Reko";
  font-size: 1.4rem;
  font-weight: 400;
  text-align: center;
  color: white;
`;

const ResultTitle = styled.div`
  font-family: "Jalnan";
  font-size: 4.5rem;
  text-align: center;
  color: #fff;
  margin-top: 1.9rem;
  margin-bottom: 15.4rem;
`;

const ResultImg = styled.img`
  position: absolute;
  width: 10rem;
`;

const Content = styled.div`
  position: absolute;
  font-family: "Reko";
  font-size: 1.3rem;
  color: #000;
`;

const ResultSquare = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  margin: 2.2rem;

  width: 33.1rem;
  height: ${(props) => (props.isNormal < 8 ? "39rem" : "22.9rem")};
  background-color: #fff;
  border-radius: 0.5rem;

  ${ResultImg} {
    justify-content: center;
    bottom: ${(props) => (props.isNormal < 8 ? "33.5rem" : "14rem")};
  }

  ${Content} {
    width: 85%;
    left: 50%;

    word-break: keep-all;

    ${(props) =>
      props.isNormal < 8
        ? `transform: translateX(-50%);
        bottom : 5rem;`
        : `top: 50%
        transform: translate(-50%, -50%);`};
  }
`;

const NormalResults = styled.div`
  display: ${(props) => (props.isNormal < 8 ? "show" : "none")};
`;

const Title = styled.div`
  font-family: "Jalnan";
  font-size: 1.6rem;
  text-align: center;
  color: #fff;
  margin-top: 4.1rem;
`;

const FlexLayout = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 2.2rem;
  margin-right: 2, 2rem;
`;

const MatchElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EmptyPlace = styled.div`
  width: 2rem;
`;

const SubTitle = styled.div`
  font-family: "Jalnan";
  font-size: 1.4rem;
  text-align: center;
  color: #fff;
  margin-top: 3.4rem;
  margin-bottom: 1.3rem;
`;

const SmallSub = styled.div`
  text-align: center;
  font-family: "Reko";
  font-weight: 100;
  font-size: 1.1rem;
  color: black;
`;

const SmallTitle = styled.div`
  text-align: center;
  font-family: "Jalnan";
  font-weight: 400;
  font-size: 1.8rem;
  color: black;
`;

const MatchImg = styled.img`
  width: 7.8rem;
`

const MatchSqaure = styled.div`
  position: relative;
  width: 100%;
  height: 24.9rem;
  background-color: #fff;
  border-radius: 0.5rem;
  text-align: center;

  ${SmallSub} {
    margin-top: 1.4rem;
  }

  ${SmallTitle} {
    margin-top: 1.3rem;
  }

  ${MatchImg} {
    margin-top: 0.6rem;
  }
`;

const ShareSquare = styled.div`
    width: 100%;
    height: 17rem;
    background-color: #fff;
    border-radius: 0.5rem;
    margin-top: 1.7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Button = styled.button`
    border: none;
    outline: none;
    background-color: #fff;
    cursor: pointer;
    margin-right: 1.6rem;
`

const BtnToPage = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.theme.dark};
`

const Img = styled.img`
`


/** ResultPage Function */
const ResultPage = () => {
  const link = window.location.href;
  /* const finalType = match.params.finalType; */
  const { finalType } = useParams();

  const alertMessage = () => {
    alert('맥주도비의 결과가 클립보드에 담겼어요!')
  }

  if (finalType <= 7 && finalType >= 0) {
    return (
      <>
        <Wrapper backgroundColor={results[finalType].color}>
          <Container>
            <ResultSub>{Parser(results[finalType].title)}</ResultSub>
            <ResultTitle>{results[finalType].name}</ResultTitle>
            <ResultSquare isNormal={finalType}>
              <ResultImg isNormal={finalType} src={results[finalType].img} />
              <Content>{Parser(results[finalType].description)}</Content>
            </ResultSquare>

            <NormalResults isNormal={finalType}>
              <Title>다른 맥주들 역시 있답니다🍺</Title>
              <FlexLayout>
                <MatchElement>
                  <SubTitle>요거 어때요? 도비의 추천!</SubTitle>
                  <MatchSqaure>
                    <SmallSub>{Parser(results[results[finalType].recommend].title)}</SmallSub>
                    <SmallTitle>{results[results[finalType].recommend].name}</SmallTitle>
                    <MatchImg src={results[results[finalType].recommend].img} />
                  </MatchSqaure>
                </MatchElement>
                <EmptyPlace />
                <MatchElement>
                    <SubTitle>ㄴㄴ 추천하지 않아요</SubTitle>
                    <MatchSqaure>
                        <SmallSub>{Parser(results[results[finalType].worst].title)}</SmallSub>
                        <SmallTitle>{results[results[finalType].worst].name}</SmallTitle>
                        <MatchImg src={results[results[finalType].worst].img} />
                    </MatchSqaure>
                </MatchElement>
              </FlexLayout>
            </NormalResults>

            <Title>친구들에게 결과 공유하기! </Title>
            <FlexLayout>
                <ShareSquare>
                    <FlexLayout>
                    <KaKaoShareBtn _sub={results[finalType].title} _title={results[finalType].name} _finalType={finalType} />
                        <CopyToClipboard text={link}>
                            <Button onClick={alertMessage}> <Img src={LinkCopyBtn}/></Button>
                        </CopyToClipboard>
                    </FlexLayout>
                    <BtnToPage path to='/'><ButtonComponent type={'result-activated'} text={'테스트 다시하기'} /></BtnToPage>
                </ShareSquare>
            </FlexLayout>
          </Container>
        </Wrapper>
      </>
    );
  }
};

export default ResultPage;
