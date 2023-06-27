import { Axios } from "./Axios";
export const AxiosPost = async (props) => {
  const { titleText, detailText, accessKey } = props;
  console.log(accessKey);

  try {
    const headers = {
      accept: "application/json",
      Authorization: `Bearer ${accessKey.accessKey}`,
    };
    const res = await Axios.post(
      `/api/posts`,
      {
        titleText,
        detailText,
      },
      { headers: headers }
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
