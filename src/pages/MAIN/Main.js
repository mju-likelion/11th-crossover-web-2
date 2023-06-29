import { Link } from "react-router-dom";
import styled from "styled-components";
import SmallBtn from "../../components/SmallBtn";

import Content from "./Content";
import { useState, useEffect } from "react";
import { Axios } from "../../api/Axios";

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
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Center>
      <WriteBtn>
        <Link to="/post">
          <SmallBtn isfull={true}>작성하기</SmallBtn>
        </Link>
      </WriteBtn>
      <Content data={data} />
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
