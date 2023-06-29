import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SmallBtn from "../../components/SmallBtn";

import Content from "./Content";
import { useState, useEffect } from "react";
import { AxiosMain } from "../../api/Post";

const Main = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    AxiosMain(handleError, page, callbackFunctions);
  }, []);

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

  const callbackFunctions = {
    getDataSuccess: ({ data }) => {
      setData((item) => [...item, ...data]);
    },
    setPageNumber: () => setPage((prev) => prev + 1),
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        AxiosMain(handleError, page, callbackFunctions);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

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
