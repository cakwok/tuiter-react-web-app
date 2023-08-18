import { Routes, Route } from "react-router";
/*import Login from "../labs/lab5/users/login";
import Profile from "../labs/lab5/users/profile";
import Register from "../labs/lab5/users/register";*/
import Details from "./details";
import Home from "./home";
import Search from "./search";

const API_KEY = process.env.REACT_APP_YELP_API_KEY;

function Project() {
  return (
    <div>
      <img src = "https://s3-media0.fl.yelpcdn.com/assets/public/developers.yji-a68f827814c0cf08bcb3.png" />
      <Routes>
        <Route path="home" element={<Home />} />
        { /*
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        */ }
        <Route path="search" element={<Search />} />
        <Route path="search/:searchTerm" element={<Search />} />
        <Route path="details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default Project;