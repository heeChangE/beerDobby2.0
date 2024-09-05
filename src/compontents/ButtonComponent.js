import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 28.2rem;
  height: 5.5rem;
  cursor: pointer;
  border-radius: 0.6rem;
  margin: 1.5rem;
  display: inline-flex;

  //${props => props.type === 'result' ? 'white' : 'black'};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Reko';
  font-size: 1.5rem;
  text-align: center;
  //${props => props.type === 'result' ? '3px solid #00462A' : '3px solid lightgray'};
  border: 1.5px solid #F3CF98;
`;

const ButtonComponent = ({ idx, type, text, onclick }) => {
  const onClickBtn = () => {
    onclick(idx);
  };

  return (
    <Button type={type} onClick={onClickBtn}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
