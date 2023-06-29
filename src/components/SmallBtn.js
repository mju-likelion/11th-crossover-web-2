import styled from "styled-components";

const SmallBtn = ({ children, isfull, click, isdelete }) => {
  return (
    <SmallButton onClick={click} $isfull={isfull} $isdelete={isdelete}>
      {children}
    </SmallButton>
  );
};

const SmallButton = styled.button`
  width: 233px;
  height: 70px;
  background-color: ${(props) => {
    if (props.$isdelete) {
      return props.theme.colors.GRAY;
    } else if (props.$isfull) return props.theme.colors.BLUE2;
    else {
      return props.theme.colors.BLUE1;
    }
  }};
  border-radius: 25px;
  color: #ffffff;
  font-size: 21px;
  font-weight: 600;
  line-height: 44px;
`;

export default SmallBtn;
