import styled from "styled-components";
import SmallBtn from "../../components/SmallBtn";
import Content from "./Content";

const Main = () => {
  return (
    <Center>
      <WriteBtn>
        <SmallBtn color={(props) => props.theme.colors.BLUE2}>
          작성하기
        </SmallBtn>
      </WriteBtn>
      <Content title="하이염" detail="내꺼임" time="13:00" isMine={true} />
      <Content title="ㅋㅋ" detail="내용2" time="15:00" isMine={false} />
    </Center>
  );
};

const Center = styled.div`
  width: 783px;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const WriteBtn = styled.div`
  width: 783px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 23px;
  display: flex;
  justify-content: flex-end;
`;

export default Main;
