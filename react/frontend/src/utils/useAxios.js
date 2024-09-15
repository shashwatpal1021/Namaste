import axios from "axios";
import dayjs from "dayjs";
import { useContext } from "react"

import AuthContext from "../context/AuthContext";
import {jwtDecode} from "jwt-decode";

const BaseURL = process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";


const useAxios = () => {
  const [authToken, setUser, setAuthToken] = useContext(AuthContext);


  const axiosInstance = axios.create({
    baseURL: BaseURL,
    headers: {
      Authorization: `Bearer ${authToken?.access}`,
    },
  });
  axiosInstance.interceptors.request.use(async req => {
    const user = jwtDecode(authToken?.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      return req
    }

    const response = await axios.post(`${BaseURL}/token/refresh/`, {
      refresh: authToken?.refresh
    });
    localStorage.setItem("authToken", JSON.stringify(response.data));
    setAuthToken(response.data);
    setUser(jwtDecode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  })
  return axiosInstance;
}

export default useAxios;