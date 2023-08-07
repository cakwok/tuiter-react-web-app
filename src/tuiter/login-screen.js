return (
    <div>
     <h1>Login Screen</h1>
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
             onClick={handleLogin}>
       Login
     </button>
    </div>
   );
  