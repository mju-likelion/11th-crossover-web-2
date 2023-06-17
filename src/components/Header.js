import styled from "styled-components";
import React from "react";
import Airplane from "../assets/images/airplane.svg";
import Logout from "../assets/images/logout.svg";

const Header = () => {
  return (
    <HeaderBar>
      <LogoText>비행기레터</LogoText>
      <AirPlaneImg src={Airplane} alt="AirplaneImg" />
      <LogoutImg src={Logout} alt="LogoutImg" />
    </HeaderBar>
  );
};
const HeaderBar = styled.div`
  width: 100%;
  height: 116px;
  background-color: #ffffff; // props로 색상 변경 예정
  border: 1px solid ${(props) => props.theme.colors.GRAY};
`;

const LogoText = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: ${(props) => props.theme.colors.BLUE2};
`;

const AirPlaneImg = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoutImg = styled.img`
  width: 32px;
  height: 32px;
`;

export default Header;
