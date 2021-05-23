import axios from "axios";

export default function apiCalls(data, route) {
  return axios({
    url: `https://wasilisha.herokuapp.com${route}`,
    method: "post",
    withCredentials: true,
    data: data,
  });
}
