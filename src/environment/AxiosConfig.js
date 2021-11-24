import axios from "axios";
import { setLoader } from "../store/actions/Loader";
import store from '../store/store'

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  
    params: {
      api_key : "93240d44326da4216c09c30b4e69d450"
    },
    headers: "",
  
});

axiosInstance.interceptors.request.use(
  (config)=>{
    store.dispatch(setLoader(true));
    return config;
  },
  (err)=>{return Promise.reject(err)},
)

axiosInstance.interceptors.response.use(
  (response)=>{
    store.dispatch(setLoader(false));
    return response;
  },
  (err)=>{return Promise.reject(err)},
)

export default axiosInstance;