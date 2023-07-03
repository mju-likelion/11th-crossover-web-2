import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Axios } from "../api/Axios";
import Airplane from "../assets/images/airplane.svg";
import Logout from "../assets/images/logout.svg";

const Header = (props) => {
  const { isLoggedin, isCheckLogin, accessToken } = props;
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    accessToken ? setIsValid(true) : setIsValid(false);
  }, [accessToken]);

  useEffect(() => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  });

  const handleLogin = () => {
    localStorage.removeItem("key");
    isCheckLogin(false);
    Axios.defaults.headers.common["Authorization"] = "";
    alert("로그아웃 하셨습니다!");
    navigate("/login");
  };

  const handleValidLogin = () => {
    isValid ? navigate("/") : navigate("/login");
  };

  return (
    <HeaderBar>
      <Align>
        <Logo onClick={handleValidLogin}>
          <LogoText>비행기레터</LogoText>
          <AirPlaneImg src={Airplane} alt="AirplaneImg" />
        </Logo>

        {isLoggedin && (
          <LogoutBtn onClick={handleLogin}>
            <LogoutImg src={Logout} alt="LogoutImg" />
          </LogoutBtn>
        )}
      </Align>
    </HeaderBar>
  );
};
const HeaderBar = styled.div`
  width: 100%;
  height: 116px;
  background-color: #fff;
  border-bottom: 1px solid ${(props) => props.theme.colors.GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 366px 0 366px;
`;

const Align = styled.div`
  width: 1199px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.button`
  display: flex;
`;

const LogoText = styled.p`
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: ${(props) => props.theme.colors.BLUE2};
`;

const AirPlaneImg = styled.img`
  width: 32px;
  height: 32px;
  margin-left: 10px;
`;

const LogoutBtn = styled.button``;

const LogoutImg = styled.img`
  width: 32px;
  height: 32px;
`;

export default Header;
