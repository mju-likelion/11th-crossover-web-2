import { Link } from "react-router-dom";
import styled from "styled-components";
import SmallBtn from "../../components/SmallBtn";
import { Theme } from "../../styles/Theme";
import Content from "./Content";
import { Axios } from "../../api/Axios";
import { useState, useEffect } from "react";

const Main = () => {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    },
  };

  useEffect(() => {
    Axios("/api/posts", options)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Center>
      <WriteBtn>
        <Link to="/post">
          <SmallBtn color={Theme.colors.BLUE2}>작성하기</SmallBtn>
        </Link>
      </WriteBtn>
      <Link to="/content">
        <Content data={data} />
      </Link>
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
