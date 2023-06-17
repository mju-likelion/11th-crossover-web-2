import styled from "styled-components";
import React from "react";

const LargeBtn = () => {
  return <LargeButton isFull={true}>로그인</LargeButton>;
};

const LargeButton = styled.button`
  width: 540px;
  height: 90px;
  background-color: green;
  border-radius: 25px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
`;

// ${(props) =>
//   props.isFull ? (theme) => theme.color.BLUE1 : (theme) => theme.color.BLUE2};
export default LargeBtn;
