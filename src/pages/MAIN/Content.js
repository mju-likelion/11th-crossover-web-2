import styled from "styled-components";
import GreyUser from "../../assets/images/greyuser.svg";
import BlueUser from "../../assets/images/blueuser.svg";
import { Link } from "react-router-dom";

const Content = ({ data }) => {
  console.log(data);
  return data?.map((item) => (
    <Link to={`/content/${item.id}`} key={item.id}>
      <PostBox key={item.id}>
        {item.isMine ? (
          <BlueUserImg src={BlueUser} alt="BlueUserImg" />
        ) : (
          <GreyUserImg src={GreyUser} alt="GreyUserImg" />
        )}
        <DetailBox>
          <Title>제목: {item.title}</Title>
          <Detail>{item.content}</Detail>
          <Time>{item.updatedAt}</Time>
        </DetailBox>
      </PostBox>
    </Link>
  ));
};

const PostBox = styled.div`
  width: 783px;
  height: 343px;
  border: 2px solid ${(props) => props.theme.colors.GRAY};
  border-radius: 25px;
  padding: 24px 40px 24px 40px;
  margin-bottom: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GreyUserImg = styled.img`
  width: 62px;
  height: 62px;
  margin-bottom: auto;
`;

const BlueUserImg = styled.img`
  width: 62px;
  height: 62px;
  margin-bottom: auto;
`;

const DetailBox = styled.div`
  width: 598px;
  height: 239px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.p`
  width: 598px;
  height: 24px;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;

const Detail = styled.div`
  width: 598px;
  height: 198px;
  border: 2px solid ${(props) => props.theme.colors.BLUE1};
  border-radius: 25px;
  padding: 24px 40px 24px 40px;
  margin-top: 17px;
`;

const Time = styled.p`
  width: 598px;
  height: auto;
  color: ${(props) => props.theme.colors.GRAY};
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  text-align: end;
`;

export default Content;
