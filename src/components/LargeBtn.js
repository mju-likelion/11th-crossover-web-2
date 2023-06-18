import styled from "styled-components";

const LargeBtn = () => {
  return <LargeButton isFull={true}>로그인</LargeButton>;
};

const LargeButton = styled.button`
  width: 540px;
  height: 90px;
  background-color: green; // 이후 색상 변경 예정
  border-radius: 25px;
  color: #ffffff;
  font-size: 36px;
  font-weight: 600;
`;

export default LargeBtn;
