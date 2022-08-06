import React, { useState } from "react";
import "./Login";
import { useUsersQuery } from "../../services/userApi";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pasword, setPasword] = useState("");
  const { data } = useUsersQuery();
  const loginBtn = (e) => {
    e.preventDefault();

    const user = data.find(
      (item) =>
        item.email.toLowerCase() === email.toLowerCase() &&
        item.password === pasword
    );

    if (user) {
      alert("wlcome web site");
      dispatch(getUser(user));
      navigate("/");
      localStorage.setItem("user",JSON.stringify(user))
    } else alert("email or paswoed incorrect");
  };
  return (
    <div className="register">
      <form onSubmit={loginBtn}>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPasword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
