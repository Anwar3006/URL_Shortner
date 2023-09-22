import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api/v1/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-type": "multipart/form-data",
    accept: "*/*",
  },
});

axiosInstance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  (response) => {
    return response;
  },
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  async (error) => {
    // error.config contain various parameters from the request that caused the error
    const originalRequest = error.config;

    if (typeof error.response == "undefined") {
      alert(
        "A server/network error occurred." +
          "Looks like CORS might be the problem." +
          "Sorry about this, we will get it fixed in a jiffy"
      );
      return Promise.reject(error);
    }

    const status = error.response?.status;
    console.log(status);
    //handle global errors

    if (error.response) {
      switch (status) {
        // Authentication (Token related issues)
        case 401:
          // console.log("Noooo");
          // if (originalRequest.url === baseURL + "token/refresh/") {
          //   window.location.href = "/login";
          //   return Promise.reject(error);
          // }
          if (
            error.response.data.code === "token_not_valid" &&
            error.response.statusText === "Unauthorized"
          ) {
            const refreshToken = localStorage.getItem("refresh_token");
            console.log(refreshToken);
            if (refreshToken) {
              // decrypt token to get data
              const tokenParts = JSON.parse(atob(refreshToken.split(".")[1]));
              const now = Math.ceil(Date.now() / 1000); // get time seconds
              //if token hasn't yet expired
              if (tokenParts.exp > now) {
                try {
                  const response = await axiosInstance.post("/token/refresh/", {
                    refresh: refreshToken,
                  });
                  // Update localStorage tokens
                  // localStorage.setItem("refresh_token", response.data.refresh);
                  localStorage.setItem("access_token", response.data.access);
                  // Update axiosInstance headers
                  axiosInstance.defaults.headers[
                    "Authorization"
                  ] = `JWT ${response.data.access}`;
                  // Update originalRequest headers
                  originalRequest.headers[
                    "Authorization"
                  ] = `JWT ${response.data.access}`;
                  return await axiosInstance(originalRequest);
                } catch (err) {
                  console.log(err);
                }
              } else {
                console.log(
                  `Refresh Token has expired, Token= ${tokenParts.exp} Current time= ${now}`
                );
                window.location.replace("/login");
              }
            } else {
              console.log(`Refresh Token not available, kindly Login`);
              window.location.replace("/login");
            }
          }
          // if (
          //   error.response.statusText === "Unauthorized" &&
          //   localStorage.getItem("refresh_token") === undefined
          // ) {
          //   window.location.replace("/login");
          // }
          // window.location.replace("/login");

          break;
        // forbidden (permission related issues)
        case 403:
          console.log("You aren't authenticated, please login");
          window.location.replace("/login");
          break;
        // bad request
        // case 400: {
        //   console.log(`Refresh Token not available, kindly Login`);
        //   window.location.href = "/login";
        // }
        // not found
        // case 404: {}
        // conflict
        // case 409: {}
        // unprocessable
        // case 422: {}
        // For other errors, just reject the promise
        default: {
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(error);
  }
);

// Add a response interceptor

// axiosInstance.interceptors.response.use(
//   (response) => {
//     // If the response is successful, just return it
//     return response;
//   },
//   (error) => {
//     const { response } = error;

//     if (response) {
//       switch (response.status) {
//         case 401:
//           // Handle 401 Unauthorized - redirect to login page
//           window.location.replace("/login");
//           break;
//         case 403:
//           // Handle 403 Forbidden - redirect to login page or show an error message
//           window.location.replace("/login");
//           break;
//         default:
//           // For other errors, just reject the promise
//           return Promise.reject(error);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
