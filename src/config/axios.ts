// import axios from "axios";

// const axiosInstance = axios.create({
// baseURL:"http://localhost:3001/",
// })
// export default axiosInstance;

import axios from "axios";

type Token = {
  access_token: string;
  refreshToken: string;
};
const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
const token: Token = JSON.parse(
  localStorage.getItem("token") ||
    JSON.stringify({
      access_token: "",
      refreshToken: "",
    })
);

const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  (config) => {
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = `Bearer ${token.access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
axiosClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    //     const prevRequest = error.config;
    //     if (error.response?.status === 401 && prevRequest.sent) {
    //       prevRequest.sent = true;
    //       try {
    //         const response = await axios.post(
    //           authEndpoint.REFRESH_TOKEN,
    //           {},
    //           {
    //             withCredentials: true,
    //             headers: {
    //               Authorization: `${authConfig.TOKEN_TYPE} ${token?.refreshToken}`,
    //             },
    //           }
    //         );
    //         if (response.status === 201) {
    //           localStorage.setItem(
    //             authEndpoint.REFRESH_TOKEN,
    //             JSON.stringify(response.data)
    //           );
    //           return axios(prevRequest);
    //         }
    //       } catch (refreshError) {
    //         return Promise.reject(refreshError);
    //       }
    //     }
    //     return Promise.reject(error);
  }
);
export default axiosClient;
export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});
