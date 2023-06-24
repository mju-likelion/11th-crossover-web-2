import { Axios } from "./Axios";

export const AxiosLogin = async (data, callbackFunction) => {
  const { id, password } = data;

  try {
    const res = await Axios.post(`/api/auth/login`, {
      id,
      password,
    });
    callbackFunction(res.data.accessToken);
  } catch (error) {
    console.log(error);
    alert(error.response.data.message[0]);
  }
};
