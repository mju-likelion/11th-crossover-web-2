import styled from "styled-components";
import { Theme } from "../styles/Theme";
import Error from "../assets/images/Error";
import Cancel from "../assets/images/Cancel";
import Success from "../assets/images/Success";
export default function Input({
  page,
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
      <InputContainer
        errorsCheck={messageCheck}
        value={inputValue[name]}
        page={page}
      >
        <InputText
          name={inputName}
          placeholder={inputName}
          type={inputType}
          {...register(name)}
          errorsCheck={messageCheck}
          value={inputValue[name]}
          page={page}
        />
        {messageCheck && <Error />}
        {page == "signup" && inputValue[name] && !messageCheck && <Success />}
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
    ${(props) => {
      if (props.page == "signup") {
        if (props.value && !props.errorsCheck) return Theme.colors.GREEN;
        else if (props.errorsCheck) return Theme.colors.RED;
        else return Theme.colors.GRAY;
      } else {
        if (props.errorsCheck) return Theme.colors.RED;
        else {
          return Theme.colors.GRAY;
        }
      }
    }};
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
  color: ${(props) => {
    if (props.page == "signup") {
      if (props.value && !props.errorsCheck) return Theme.colors.GREEN;
      else if (props.errorsCheck) return Theme.colors.RED;
      else return Theme.colors.GRAY;
    } else {
      if (props.errorsCheck) return Theme.colors.RED;
      else {
        return Theme.colors.GRAY;
      }
    }
  }};
`;

const CancelButton = styled.button``;
