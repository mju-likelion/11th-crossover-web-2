import { Axios } from "./Axios";

const accessToken = localStorage.getItem("key");

const headers = {
  Authorization: accessToken ? `Bearer ${accessToken}` : "",
};
// Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
//   "key"
// )}`;
export const AxiosPost = async (data, handleNavigate, handleError) => {
  try {
    const res = await Axios.post(`/api/posts`, data, { headers });
    console.log(headers);
    handleNavigate();
  } catch (error) {
    handleError(error);
  }
};

export const AxiosGet = async (data, handleData, handleError) => {
  try {
    const res = await Axios.get(`/api/posts/${data}`, { headers });
    handleData(res);
  } catch (error) {
    handleError(error);
  }
};

export const AxiosDelete = async (data, handleNavigate, handleError) => {
  try {
    const res = await Axios.delete(`/api/posts/${data}`, { headers });
    handleNavigate();
  } catch (error) {
    handleError(error);
  }
};

export const AxiosMain = async (
  handleError,
  page,
  { getDataSuccess, setPageNumber }
) => {
  try {
    const res = await Axios.get("/api/posts", { headers, params: { page } });
    getDataSuccess(res);
    setPageNumber();
  } catch (error) {
    console.log("123");
    handleError(error);
  }
};
