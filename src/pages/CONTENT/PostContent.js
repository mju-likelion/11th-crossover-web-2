import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { AxiosDelete, AxiosGet } from "../../api/Post";
import SmallBtn from "../../components/SmallBtn";

const PostContent = () => {
  const [postData, setPostData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    AxiosGet(id, handleData, handleError);
  }, []);
  const handleData = ({ data }) => {
    setPostData(data);
  };
  const handleError = (error) => {
    if (error.response.status == 401) {
      error.response.data.message.map((item) => {
        alert(item);
      });
      navigate("/login");
    } else {
      error.response.data.message.map((item) => {
        alert(item);
      });
    }
  };
  const handleDelete = () => {
    AxiosDelete(id, handleNavigate, handleError);
  };
  const handleNavigate = () => {
    alert("삭제가 완료 되었습니다");
    navigate("/");
  };
  return (
    <PostContainer>
      <TitleContainer>
        <Title>제목: </Title>
        <TitleInput>{postData.title}</TitleInput>
        <TitleCounting>
          ({postData.title ? postData.title.length : 0}/ 20 )
        </TitleCounting>
      </TitleContainer>
      <DetailCotainer>
        <DetailInput>{postData.content} </DetailInput>
        <DetailCounting>
          ( {postData.content ? postData.content.length : 0} / 140 )
        </DetailCounting>
      </DetailCotainer>
      <Warning>※ 작성된 게시글은 수정이 불가합니다.</Warning>
      <WriteBtn>
        {postData.isMine && (
          <SmallBtn click={handleDelete} isdelete={true}>
            삭제하기
          </SmallBtn>
        )}
      </WriteBtn>
    </PostContainer>
  );
};

const PostContainer = styled.div`
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

const TitleInput = styled.div`
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

const DetailInput = styled.div`
  width: 714px;
  height: 627px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  border: none;
  resize: none;
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

export default PostContent;
