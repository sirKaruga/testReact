import axios from "axios";

export default function apiCalls(data, route) {
  return axios({
    url: `http://localhost:9000${route}`,
    method: "post",
    withCredentials: true,
    data: data,
  });
}
