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

export const AxiosGet = async (data) => {
  console.log(data);
  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("key")}`,
    };
    const res = await Axios.get(`/api/posts/${data}}`, {
      headers: headers,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
