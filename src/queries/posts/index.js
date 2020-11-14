import axios from "axios";
import { root } from "queries";

export const get_post = async () => {
  const { data } = await axios.get(`${root}posts`);
  return data;
};

export const post_post = async (body) => {
  const { data } = await axios.post(`${root}posts`, body);
  return data;
};
