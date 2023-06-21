import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login() {
  const [checkLogin, setCheckLogin] = useState(false);

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
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (checkLogin == false) {
      setCheckLogin(true);
      console.log(checkLogin);
    }
  };

  const handleLogin = (data) => {
    return errors[data] && checkLogin;
  };

  const value = watch();
  console.log(value);

  return (
    <>
      <LoginContainer>
        <LoginTitle> 로그인</LoginTitle>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <Input
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
          {!value.id && (
            <LoginText>
              영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
            </LoginText>
          )}
          <Input
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
          {!value.password && (
            <LoginText>
              영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
              주세요.
            </LoginText>
          )}
          <button type="button" onClick={handleClick}>
            button
          </button>
        </LoginForm>
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
