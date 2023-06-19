import styled from "styled-components";

const SmallBtn = (props) => {
  const { children, color } = props;
  return <SmallButton color={color}>{children}</SmallButton>;
};

const SmallButton = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${(props) => props.color};
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  font-weight: 600;
  line-height: 44px;
`;

export default SmallBtn;
