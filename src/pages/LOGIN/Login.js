import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LargeBtn from "../../components/LargeBtn";
import { Link } from "react-router-dom";
import { AxiosLogin } from "../../api/Login";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { isLogin } = props;
  const [checkLogin, setCheckLogin] = useState(false);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    id: yup
      .string()
      .required("사용하실 수 없는 아이디입니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,9}$/,
        "사용하실 수 없는 아이디입니다"
      ),
    password: yup
      .string()
      .required("사용하실 수 없는 비밀번호입니다")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,13}$/,
        "사용하실 수 없는 비밀번호입니다"
      ),
  });
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { id: "", password: "" },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    AxiosLogin(data, callbackFunction);
  };

  const handleClick = () => {
    if (checkLogin == false) {
      setCheckLogin(true);
    }
  };

  const handleLogin = (data) => {
    return errors[data] && checkLogin;
  };

  const value = watch();

  const callbackFunction = (data) => {
    localStorage.setItem("key", data);
    isLogin(true);
    alert("로그인에 성공하셨습니다.");
    navigate("/");
  };

  return (
    <>
      <LoginContainer>
        <LoginTitle> 로그인</LoginTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            page="login"
            inputName="아이디"
            inputType="text"
            register={register}
            name="id"
            messageCheck={handleLogin("id")}
            inputValue={value}
            setValue={setValue}
            errors={errors}
          />
          {handleLogin("id") && <LoginError>{errors.id.message}</LoginError>}
          {!value.id && !errors.id && (
            <LoginText>
              영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
            </LoginText>
          )}
          <Input
            page="login"
            inputName="비밀번호"
            inputType="password"
            register={register}
            name="password"
            messageCheck={handleLogin("password")}
            inputValue={value}
            setValue={setValue}
            errors={errors}
          />
          {handleLogin("password") && (
            <LoginError>{errors.password.message}</LoginError>
          )}
          {!value.password && !errors.password && (
            <LoginText>
              영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
              주세요.
            </LoginText>
          )}
          <LargeBtn
            click={handleClick}
            checkSubmit={value.id && value.password}
          >
            로그인
          </LargeBtn>
        </LoginForm>
        <Link to="/signup">
          <SignupBtn>회원가입</SignupBtn>
        </Link>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 54px;
  font-weight: 600;
  color: black;
  margin: 31px 0px 74px;
`;

const LoginForm = styled.form``;

const LoginText = styled.p`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: rgb(0, 0, 0);
  opacity: 0.45;
`;

const LoginError = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.RED};
`;

const SignupBtn = styled.button`
  margin-top: 31px;
  margin-left: 430px;
  font-weight: 500;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.GRAY};
`;
