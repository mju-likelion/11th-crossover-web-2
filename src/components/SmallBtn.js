import styled from "styled-components";
import React from "react";

const SmallBtn = () => {
  return <SmallButton>작성하기</SmallButton>;
};

const SmallButton = styled.button`
  width: 233px;
  height: 70px;
  background-color: #99ceff; // props로 색상 변경 예정
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  font-weight: 600;
  line-height: 44px;
`;

export default SmallBtn;
