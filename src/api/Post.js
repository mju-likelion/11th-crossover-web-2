import { Axios } from "./Axios";

Axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "key"
)}`;
// const headers = {
//   Authorization: `Bearer ${localStorage.getItem("key")}`,
// };

export const AxiosPost = async (data, handleNavigate, handleError) => {
  try {
    const res = await Axios.post(`/api/posts`, data);
    handleNavigate();
  } catch (error) {
    handleError(error);
  }
};

export const AxiosGet = async (data, handleData, handleError) => {
  try {
    const res = await Axios.get(`/api/posts/${data}`);
    handleData(res);
  } catch (error) {
    handleError(error);
  }
};

export const AxiosDelete = async (data, handleNavigate, handleError) => {
  try {
    const res = await Axios.delete(`/api/posts/${data}`);
    handleNavigate();
  } catch (error) {
    handleError(error);
  }
};
