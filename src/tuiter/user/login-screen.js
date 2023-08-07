import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { loginThunk } from "../services/auth-thunks";
function LoginScreen() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const handleLogin = async () => {
  try {
    await dispatch(loginThunk({ username, password }));
    navigate("/profile");
  } catch (e) {
    alert(e);
  }
 };
 return ( );
}
export default LoginScreen;
