import { Axios } from "./Axios";

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

export const AxiosMain = async (
  handleError,
  page,
  { getDataSuccess, setPageNumber }
) => {
  try {
    const res = await Axios.get("/api/posts", {
      params: { page },
    });
    getDataSuccess(res);
    setPageNumber();
  } catch (error) {
    handleError(error);
  }
};
