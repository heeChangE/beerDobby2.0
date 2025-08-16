import React, { useState } from "react";
import styled from "styled-components";
import { IoBeerSharp } from "react-icons/io5";
import contents from "./contents/questions";
import ButtonComponent from "../compontents/ButtonComponent";
import ProgressBar from "../compontents/progressBar";
import Parser from "html-react-parser";
import { Link, NavLink } from "react-router-dom";

// 상수 정의
const QUESTION_CONFIG = {
  TOTAL_QUESTIONS: 6,
  PROGRESS_PER_QUESTION: 16.7,
  SCORE_THRESHOLD: 5,
  WEIGHTS: {
    FIRST: 4,
    SECOND: 2,
    THIRD: 1
  }
};

const QUESTION_GROUPS = {
  FIRST: [0, 1],    // 질문 0, 1번
  SECOND: [2, 3],   // 질문 2, 3번
  THIRD: [4, 5]     // 질문 4, 5번
};

const Wrapper = styled.div`
  display: ${(props) => (props.welcome === true ? "flex" : "none")};
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background-color: #fff;
  margin-bottom: 3rem;
  text-align: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12), 0 1px 1.5px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.15, 0.4, 0.15, 0.5);
  padding: 2.5rem;
`;

const Title = styled.div`
  font-family: "Jalnan";
  font-size: 2.9rem;
  text-align: center;
  color: #ffc72c;
  margin-top: 1.9rem;
  margin-bottom: 8.4rem;
`;

const Footer = styled.div`
  font-family: "Reko";
  font-size: 1.4rem;
  font-weight: 200;
  text-align: center;
  margin-top: 5.5rem;
  color: #a7a7a7;
`;

const Msg = styled.div`
  font-family: "Jalnan";
  font-size: 2.0rem;
  font-weight: 400;
  text-align: center;
  color: #a7a7a7;
`;

const Text = styled.div`
  font-family: "Jalnan";
  font-size: 1.9rem;
  font-weight: light;
  margin: 0.5rem;
  text-align: center;
  margin-top: 3.9rem;
  margin-bottom: 7rem;
  line-height: 30px;
`;

/**
 * QuizPage 컴포넌트
 * 맥주 취향 테스트를 진행하는 메인 페이지
 */
function QuizPage({ welcome }) {
  // 상태 관리
  const [questionNumber, setQuestionNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [process, setProcess] = useState(false);
  const [linkTo, setLinkTo] = useState("");
  const [types, setTypes] = useState({ first: 0, second: 0, third: 0 });
  const [finalType, setFinalType] = useState(0);

  const linkResult = "/result/";

  /**
   * 질문 번호에 따른 타입 그룹을 반환
   * @param {number} questionNumber - 현재 질문 번호
   * @returns {string|null} 타입 그룹 ('first', 'second', 'third') 또는 null
   */
  const getTypeGroup = (questionNumber) => {
    if (QUESTION_GROUPS.FIRST.includes(questionNumber)) return 'first';
    if (QUESTION_GROUPS.SECOND.includes(questionNumber)) return 'second';
    if (QUESTION_GROUPS.THIRD.includes(questionNumber)) return 'third';
    return null;
  };

  /**
   * 최종 맥주 타입을 계산
   * @param {Object} types - 각 타입별 점수
   * @param {number} thirdTypeScore - third 타입의 현재 점수
   * @returns {number} 최종 타입 (0-7)
   */
  const calculateFinalType = (types, thirdTypeScore) => {
    let result = 0;
    
    // 각 타입별 점수에 따른 가중치 계산
    if (types.first >= QUESTION_CONFIG.SCORE_THRESHOLD) {
      result += QUESTION_CONFIG.WEIGHTS.FIRST;
    }
    if (types.second >= QUESTION_CONFIG.SCORE_THRESHOLD) {
      result += QUESTION_CONFIG.WEIGHTS.SECOND;
    }
    if (thirdTypeScore >= QUESTION_CONFIG.SCORE_THRESHOLD) {
      result += QUESTION_CONFIG.WEIGHTS.THIRD;
    }
    
    return result;
  };

  /**
   * 결과 페이지로 이동하는 로직
   * @param {number} finalType - 계산된 최종 타입
   */
  const navigateToResult = (finalType) => {
    setFinalType(finalType);
    setLinkTo(linkResult + finalType);
    setLoading(true);
    
    // 2.5초 후 결과 확인 버튼 표시
    setTimeout(() => {
      setLoading(false);
      setProcess(true);
    }, 2500);
  };

  /**
   * 질문 답변 처리 함수
   * 원본 로직을 그대로 유지하면서 가독성 향상
   * @param {number} key - 답변 인덱스
   * @param {number} score - 답변 점수
   */
  function onConditionChange(key, score) {
    const record = contents[questionNumber].weight * score;
    const typeGroup = getTypeGroup(questionNumber);
    
    // 질문 그룹에 따른 점수 업데이트
    if (typeGroup) {
      if (typeGroup === 'third') {
        // third 타입의 경우 최종 계산을 포함
        setTypes(prev => {
          const updatedTypes = { ...prev, third: prev.third + record };
          
          // 마지막 질문(5번)에서 최종 타입 계산
          if (questionNumber === 5) {
            const finalType = calculateFinalType(types, updatedTypes.third);
            navigateToResult(finalType);
          }
          
          return updatedTypes;
        });
      } else {
        // first, second 타입의 경우 단순 업데이트
        setTypes(prev => ({ ...prev, [typeGroup]: prev[typeGroup] + record }));
      }
    }
    
    // 다음 질문으로 이동
    setQuestionNumber(questionNumber + 1);
  }

  /**
   * 결과 확인 버튼 클릭 핸들러
   */
  const onClickResultBtn = () => {
    setProcess(false);
    setQuestionNumber(7);
  };

  // 로딩 화면 (질문 완료 후)
  if (questionNumber === QUESTION_CONFIG.TOTAL_QUESTIONS) {
    return (
      <>
        <Wrapper welcome={loading}>
          <Title>
            Beer Dobby
            <IoBeerSharp />
          </Title>
          <Msg>당신의 맥주 취향을 찾고 있어요! .. </Msg>
          <Footer>도비는 곧 자유에요! 신나요!</Footer>
        </Wrapper>
        <Wrapper welcome={process}>
          <Container>
            <Text>테스트 완료!</Text>
            <Link to={linkTo} style={{ textDecoration: "none" }}>
              <ButtonComponent
                type={"result"}
                text="결과 확인하기👍"
                onClick={onClickResultBtn}
              />
            </Link>
          </Container>
        </Wrapper>
      </>
    );
  }

  // 최종 타입이 7인 경우 자동 리다이렉트
  if (finalType === 7) {
    return (
      <div>
        <NavLink to={linkTo} />
      </div>
    );
  }

  // 메인 퀴즈 화면
  if (questionNumber < QUESTION_CONFIG.TOTAL_QUESTIONS && finalType !== 7) {
    return (
      <>
        <Wrapper welcome={welcome}>
          <ProgressBar completed={(questionNumber + 1) * QUESTION_CONFIG.PROGRESS_PER_QUESTION} />

          <Container>
            <Text>{Parser(contents[questionNumber].question)}</Text>
            {contents[questionNumber].answers.map((answer, i) => (
              <ButtonComponent
                key={i}
                idx={i}
                text={Parser(answer.text)}
                onClick={() => onConditionChange(i, answer.score)}
              />
            ))}
          </Container>
        </Wrapper>
      </>
    );
  }

  return null;
}

export default QuizPage;
