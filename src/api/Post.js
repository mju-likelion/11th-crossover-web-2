import { Axios } from "./Axios";
export const AxiosPost = async (props) => {
  const { titleText, detailText } = props;

  try {
    const res = await Axios.post(`/api/posts`, {
      titleText,
      detailText,
    });
    console.log(res);
  } catch (error) {
    alert(error.response.data.message[0]);
  }
};
