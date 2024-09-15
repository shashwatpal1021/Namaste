import { createContext, useState, useEffect } from "react";
import {jwtDecode} from "jwt-decode";
import { useNavigate } from "react-router-dom";

const swal = require('sweetalert2');

const AuthContext = createContext();
const BaseUrl= process.env.REACT_APP_BASE_URL || "http://127.0.0.1:8000";

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null);


  const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwtDecode(localStorage.getItem("authTokens")) : null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    console.log("data", data)
    if (response.status === 200) {
      console.log("login success")
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/");
      swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Login Successful',
        toast: true,
        timer: 6000,
        position: 'top-right',
        showConfirmButton: false,
        timeProgressBar: true,
      })
    } else {
      console.log("login failed")
      console.log(response.status)
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email or Password is incorrect',
        toast: true,
        timer: 6000,
        position: 'top-right',
        showConfirmButton: false,
        timeProgressBar: true,
      })
    }
  }

  const registerUser = async (username, email, password, password2) => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/api/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        password2,
      }),
    });
    if (response.status === 200) {
      navigate("/login");
      swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Registration Successful',
        toast: true,
        timer: 6000,
        position: 'top-right',
        showConfirmButton: false,
        timeProgressBar: true,
      })
    } else {
      console.log(response.status)
      console.log("register failed")
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email already exists',
        toast: true,
        timer: 6000,
        position: 'top-right',
        showConfirmButton: false,
        timeProgressBar: true,
      })
    }
  }

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login");
    swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Logout Successful',
      toast: true,
      timer: 6000,
      position: 'top-right',
      showConfirmButton: false,
      timeProgressBar: true,
    })
  }

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    setUser,
    setAuthTokens,
    authTokens,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwtDecode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
} 