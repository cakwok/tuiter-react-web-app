import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleRegister = async () => {
    try {
        const temp = await dispatch(registerThunk({ username, password }));
        console.log("register-screen", username);
        if (!temp) { 
            navigate("/tuiter/profile");
        }
        else {
            alert("User exists");
            return;
        }
        
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
     <div className="mt-2">
        <label>Password</label>
        <input className="form-control" type="password" value={password}
        onChange={(event) => setPassword(event.target.value)}/>
     </div>
     <button className="btn btn-primary mt-2"
             onClick={handleRegister}>
       Register
     </button>
    </div>
    );
}

export default RegisterScreen;