import axios from 'axios';

export function get(url) {
  return axios({
    method: "get",
    url: url,
    // data: data,
    // config: {
    //   headers: { "Content-Type": "multipart/form-data" }
    // }
  });
}

export function post(url, data) {
  return axios({
    method: "post",
    url: url,
    data: data
  });
}
