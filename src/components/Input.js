import styled from "styled-components";
import { Theme } from "../styles/Theme";
import Error from "../assets/images/Error";
import Cancel from "../assets/images/Cancel";

export default function Input({
  inputName,
  inputType,
  register,
  name,
  messageCheck,
  inputValue,
  setValue,
  errors,
}) {
  const handleInputBox = () => {
    setValue(name, "");
    errors[name] = "";
  };
  return (
    <>
      <InputContainer errorsCheck={messageCheck}>
        <InputText
          name={inputName}
          placeholder={inputName}
          type={inputType}
          {...register(name)}
          errorsCheck={messageCheck}
        />
        {messageCheck && <Error />}
        {inputValue[name] && (
          <CancelButton type="button" onClick={handleInputBox}>
            <Cancel />
          </CancelButton>
        )}
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
  border: 2px solid
    ${(props) => (props.errorsCheck ? Theme.colors.RED : Theme.colors.GRAY)};
  padding: 29px 27px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const InputText = styled.input`
  width: 440px;
  height: 24px;
  border: none;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => (props.errorsCheck ? Theme.colors.RED : "black")};
`;

const CancelButton = styled.button``;
