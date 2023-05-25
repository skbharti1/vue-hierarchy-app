import httpClient from "../common";

const getData = async () => {
  return httpClient.get("/data").then((res) => res.data);
};

export { getData };