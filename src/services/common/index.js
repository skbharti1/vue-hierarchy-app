import axios from "axios";

const apiBaseUrl = "http://localhost:3000"; // 3000 is the default port number of json-server

/**
 * Axios basic configuration
 * */
const config = {
  baseURL: apiBaseUrl,
  Accept: "application/json",
};

/**
 * Creating the instance of Axios
 * It is because, in large scale application we may need to consume APIs from more than single server,
 * So, may need to create multiple http client with different config
 * Only this client will be used rather than axios in the application
 **/
const httpClient = axios.create(config);

export default httpClient;
