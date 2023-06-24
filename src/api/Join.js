import { Axios } from "./Axios";

export const AxiosJoin = (data, callbackFuctions) => {
  const { id, password, email } = data;

  Axios.post(`/api/auth/register`, {
    id,
    password,
    email,
  })
    .then((res) => {
      callbackFuctions();
    })
    .catch((error) => {
      error.response.data.message.map((message) => alert(message));
    });
};
