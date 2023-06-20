import styled from "styled-components";

const LargeBtn = (props) => {
  const { children } = props;
  return <LargeButton isFull={true}>{children}</LargeButton>;
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
