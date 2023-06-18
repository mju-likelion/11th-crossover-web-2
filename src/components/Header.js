import styled from "styled-components";
import Airplane from "../assets/images/airplane.svg";
import Logout from "../assets/images/logout.svg";

const Header = () => {
  return (
    <HeaderBar>
      <Align>
        <LogoText>비행기레터</LogoText>
        <AirPlaneImg src={Airplane} alt="AirplaneImg" />
        <LogoutImg src={Logout} alt="LogoutImg" />
      </Align>
    </HeaderBar>
  );
};
const HeaderBar = styled.div`
  width: 1920px;
  height: 116px;
  background-color: #ffffff;
  border-bottom: 1px solid ${(props) => props.theme.colors.GRAY};
`;

const Align = styled.div`
  display: flex;
`;

const LogoText = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.colors.BLUE2};
  margin-top: 36px;
  margin-left: 363px;
`;

const AirPlaneImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  margin-top: 42px;
`;

const LogoutImg = styled.img`
  width: 32px;
  height: 32px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: 363px;
`;

export default Header;
