import styled from "styled-components";
import { Theme } from "../styles/Theme";

export default function Input({ inputName }) {
  return (
    <>
      <InputContainer color={Theme.colors.GRAY}>
        <InputText placeholder={inputName} />
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
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

const InputText = styled.input`
  width: 440px;
  height: 24px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`;

const SuccessCheck = styled.div``;
