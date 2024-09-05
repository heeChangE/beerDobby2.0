import React from "react";
import styled from "styled-components";

const Button = styled.div`
    width: 29.2rem;
    height: 7rem;
    border-radius: 0.5rem;
    background-color: ${props => [props.type === true ? '#ffc72c' : props.theme.white]};
    // type에 따라 맥주 색상 버튼인지 회색 테두리 버튼인지 결정하도록 하는 코드 #bbc4ef #fdd801 #ffc72c
    cursor: pointer;
    margin: 1.5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: "Jalnan";
    color: white;
    font-size: 2.0rem;
    border: none;
`

/** StartingButtonComponent Component */
const StartingButtonComponent = ({ idx, type, text, onclick}) => {

    const onClickBtn = () => {
        onclick(idx);
    }
    return(
        <Button type={type} onClick={onClickBtn}>{text}</Button>
    );
}

export default StartingButtonComponent