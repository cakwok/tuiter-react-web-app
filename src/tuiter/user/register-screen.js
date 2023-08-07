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

return (
    <div>
     <h1>Register Screen</h1>
     <div className="mt-2">
      <label>Username</label>
      <input className="form-control" type="text" value={username}
       onChange={(event) => setUsername(event.target.value)}/>
     </div>
     <button className="btn btn-primary mt-2"
             onClick={handleLogin}>
       Register
     </button>
    </div>
    );
}

export default LoginScreen;