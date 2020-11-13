import axios from "axios";
import { root } from "queries";

export const get_post = async () => {
  const { data } = await axios.get(`${root}posts`);
  return data;
};
