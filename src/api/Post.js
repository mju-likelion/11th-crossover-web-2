import { Axios } from "./Axios";
export const AxiosPost = async (data, handleNavigate) => {
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    };
    const res = await Axios.post(`/api/posts`, data, { headers: headers });
    console.log(res);
    handleNavigate();
    alert("게시물작성이 완료되었습니다");
  } catch (error) {
    console.log(error);
    error.response.data.message.map((item) => {
      alert(item);
    });
  }
};

export const AxiosGet = async (data, handleData) => {
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    };
    const res = await Axios.get(`/api/posts/${data}`, {
      headers: headers,
    });
    handleData(res);
  } catch (error) {
    console.log(error);
  }
};

export const AxiosDelete = async (data, handleNavigate) => {
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    };
    const res = await Axios.delete(`/api/posts/${data}`, {
      headers: headers,
    });
    alert("삭제가 완료 되었습니다");
    handleNavigate();
  } catch (error) {
    alert(error.response.data.message[0]);
  }
};
