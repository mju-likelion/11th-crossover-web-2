import { useState } from "react";
import styled from "styled-components";
import { AxiosPost } from "../../api/Post";
import SmallBtn from "../../components/SmallBtn";
import { Theme } from "../../styles/Theme";

const Post = (props) => {
  const { accessKey } = props;
  const [titleText, setTitleText] = useState("");
  const [titleCount, setTitleCount] = useState(0);
  console.log(accessKey);

  const handleTitleText = (e) => {
    setTitleText(e.target.value);
    setTitleCount(e.target.value.length);
  };

  const [detailText, setDetailText] = useState("");
  const [detailCount, setDetailCount] = useState(0);

  const handleDetailText = (e) => {
    setDetailText(e.target.value);
    setDetailCount(e.target.value.length);
  };

  const handleClick = () => {
    AxiosPost(titleText, detailText, accessKey);
  };

  return (
    <PostBox>
      <TitleContainer>
        <Title>제목: </Title>
        <TitleInput
          onChange={handleTitleText}
          maxLength={20}
          spellCheck="false"
        ></TitleInput>
        <TitleCounting onChange={handleTitleText}>
          ( {titleCount} / 20 )
        </TitleCounting>
      </TitleContainer>
      <DetailCotainer>
        <DetailInput
          onChange={handleDetailText}
          maxLength={140}
          spellCheck="false"
        />
        <DetailCounting>( {detailCount} / 140 )</DetailCounting>
      </DetailCotainer>
      <Warning>※ 작성된 게시글은 수정이 불가합니다.</Warning>
      <WriteBtn>
        <SmallBtn
          click={handleClick}
          color={
            titleText && detailText ? Theme.colors.BLUE2 : Theme.colors.BLUE1
          }
        >
          작성하기
        </SmallBtn>
      </WriteBtn>
    </PostBox>
  );
};

const PostBox = styled.div`
  width: 794px;
  height: 1092px;
  margin: auto;
  margin-top: 46px;
  display: flex;
  flex-wrap: wrap;
`;

const TitleContainer = styled.div`
  width: 794px;
  height: 134px;
  border-radius: 25px;
  border: 2px solid ${(props) => props.theme.colors.GRAY};
  padding: 55px 35px 55px 35px;
  gap: 10px;
  display: flex;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #000000;
`;

const TitleInput = styled.input`
  height: 24px;
  width: 561px;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  border: none;
  color: #000000;
  &:focus {
    outline: none;
  }
`;

const TitleCounting = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.GRAY};
`;

const DetailCotainer = styled.div`
  width: 794px;
  height: 751px;
  border-radius: 25px;
  padding: 35px;
  gap: 10px;
  border: 2px solid ${(props) => props.theme.colors.GRAY};
`;

const DetailInput = styled.textarea`
  width: 714px;
  height: 627px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  border: none;
  &:focus {
    outline: none;
  }
`;

const DetailCounting = styled.div`
  width: 714px;
  height: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: ${(props) => props.theme.colors.GRAY};
  display: flex;
  justify-content: flex-end;
`;

const Warning = styled.p`
  width: 726px;
  height: 28px;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  margin-left: 35px;
  color: ${(props) => props.theme.colors.GRAY};
`;

const WriteBtn = styled.div`
  width: 783px;
  height: 70px;
  margin-top: 20px;
  margin-bottom: 23px;
  display: flex;
  justify-content: flex-end;
`;

export default Post;
