import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LargeBtn from "../../components/LargeBtn";
import GreenCheck from "../../assets/images/GreenCheck";
import CheckBox from "../../assets/images/CheckBox";
import { SignupData } from "../../assets/data/SignupData";
import { AxiosJoin } from "../../api/Join";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [checkSignup, setCheckSignup] = useState(false);
  const [buttonCheck, setButtonCheck] = useState(false);
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
    email: yup
      .string()
      .required("이메일 형식에 맞지 않습니다")
      .matches(
        /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/,
        "이메일 형식에 맞지 않습니다"
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

  const onSubmit = (data) => {
    console.log(data);

    const success = () => {
      alert("회원가입 성공!");
      navigate("/login");
    };
    AxiosJoin(data, success);
  };

  const handleClick = () => {
    if (checkSignup == false) {
      setCheckSignup(true);
    }
  };

  const value = watch();

  return (
    <>
      <SignupContainer>
        <SignupTitle> 회원가입</SignupTitle>
        <SignupForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            page="signup"
            inputName="아이디"
            inputType="text"
            register={register}
            name="id"
            messageCheck={errors.id}
            inputValue={value}
            setValue={setValue}
            errors={errors}
          />
          {errors.id && <SignupError>{errors.id.message}</SignupError>}
          {!value.id && !errors.id && (
            <SignupText>
              영문과 숫자을 조합하여 5~10글자 미만으로 입력하여 주세요.
            </SignupText>
          )}
          {!errors.id && value.id && (
            <SignupSuccess>사용 가능한 아이디 입니다 </SignupSuccess>
          )}
          <Input
            page="signup"
            inputName="비밀번호"
            inputType="password"
            register={register}
            name="password"
            messageCheck={errors.password}
            inputValue={value}
            setValue={setValue}
            errors={errors}
          />
          {errors.password && (
            <SignupError>{errors.password.message}</SignupError>
          )}
          {!value.password && !errors.password && (
            <SignupText>
              영문과 숫자, 특수기호를 조합하여 8~14 글자 미만으로 입력하여
              주세요.
            </SignupText>
          )}
          {!errors.password && value.password && (
            <SignupSuccess>사용 가능한 비밀번호 입니다.</SignupSuccess>
          )}
          <Input
            page="signup"
            inputName="이메일"
            inputType="text"
            register={register}
            name="email"
            messageCheck={errors.email}
            inputValue={value}
            setValue={setValue}
            errors={errors}
          />
          {errors.email && <SignupError>{errors.email.message}</SignupError>}
          {!value.email && !errors.email && (
            <SignupText>사용하실 이메일을 입력해주세요.</SignupText>
          )}
          {!errors.email && value.email && (
            <SignupSuccess>사용 가능한 이메일 입니다.</SignupSuccess>
          )}
          <SignupAgreeContainer>
            <AgreeTitleContatiner>
              <SignupAgreeTitle>
                <p>[필수]</p>
                개인정보보호정책
              </SignupAgreeTitle>
              <AgreeCheckContainer>
                약관동의
                <SignupAgreeCheck
                  type="button"
                  onClick={() => setButtonCheck((prev) => !prev)}
                >
                  {buttonCheck && <GreenCheck />}
                  {!buttonCheck && <CheckBox />}
                </SignupAgreeCheck>
              </AgreeCheckContainer>
            </AgreeTitleContatiner>
            <SignupAgreeContentBox>
              <SignupAgreeContent>{SignupData}</SignupAgreeContent>
            </SignupAgreeContentBox>
          </SignupAgreeContainer>

          <LargeBtn
            click={handleClick}
            checkSubmit={
              value.id && value.password && value.email && buttonCheck
            }
          >
            완료하기
          </LargeBtn>
        </SignupForm>
      </SignupContainer>
    </>
  );
}

const SignupContainer = styled.div`
  width: 100%;
  height: 1259px;
  margin-top: 114px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupTitle = styled.h1`
  font-size: 54px;
  font-weight: 600;
  color: black;
  margin: 0px 0px 74px;
`;

const SignupForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupText = styled.p`
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

const SignupError = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.RED};
`;

const SignupSuccess = styled.div`
  text-align: left;
  width: 495px;
  height: 19px;
  margin: 10px 22.5px 21px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.GREEN};
`;

const SignupAgreeContainer = styled.div`
  margin-top: 34px;
  width: 1166px;
  height: 410px;
  margin-bottom: 114px;
`;
const SignupAgreeTitle = styled.div`
  display: flex;
  > p {
    color: ${({ theme }) => theme.colors.GREEN};
  }
`;
const AgreeTitleContatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AgreeCheckContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SignupAgreeCheck = styled.button`
  margin-left: 6px;
`;
const SignupAgreeContentBox = styled.div`
  display: flex;
  justify-content: center;
  width: 1166px;
  height: 342px;
  padding: 19px 16px 19px 30px;
  border: 2px solid rgb(113, 113, 113);
  border-radius: 25px;
`;
const SignupAgreeContent = styled.div`
  padding-right: 26px;
  overflow-y: scroll;
  white-space: pre-wrap;

  &::-webkit-scrollbar {
    width: 5px;
    height: 37px;
    border: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.GRAY};
    border-radius: 12px;
  }
`;
