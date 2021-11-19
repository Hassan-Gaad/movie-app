import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  
    params: {
      api_key : "93240d44326da4216c09c30b4e69d450"
    },
    headers: "",
  
});

export default axiosInstance;