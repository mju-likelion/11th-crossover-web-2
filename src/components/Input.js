import { useState } from "react";
import styled from "styled-components";
import Cancle from "../assets/images/Cancle";
import Error from "../assets/images/Error";
import Success from "../assets/images/Success";

export default function Input({ inputName }) {
  const [inputCheck, setInputCheck] = useState(false);
  const [inputState, setInputState] = useState(false);

  return (
    <>
      <InputLoginContainer>
        <InputLogin placeholder={inputName} />
        {inputCheck ? <Success /> : <Error />}
        {inputState ? "" : <Cancle />}
      </InputLoginContainer>
    </>
  );
}

const InputLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 540px;
  height: 90px;
  background-color: #ffffff;
  border-radius: 25px;
  border: 2px solid ${(props) => props.color};
  padding: 29px 27px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const InputLogin = styled.input`
  width: 440px;
  height: 24px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const SuccessCheck = styled.div``;
