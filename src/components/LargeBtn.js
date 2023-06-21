import styled from "styled-components";

const LargeBtn = (props) => {
  const { children, click, checkSubmit } = props;
  return (
    <LargeButton onClick={click} isFull={checkSubmit}>
      {children}
    </LargeButton>
  );
};

const LargeButton = styled.button`
  width: 540px;
  height: 90px;
  background-color: ${(props) =>
    props.isFull ? props.theme.colors.BLUE2 : props.theme.colors.BLUE1};
  border-radius: 25px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
`;

export default LargeBtn;
