import React, { useContext, useState } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import { UserContext } from "../UserContext";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const location = useLocation();
  const checkEmail = location?.state;
  // const checkPassword = location?.data?.password;
  const navigate = useNavigate();

  async function loginSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { email, password });
      console.log(data);
      setUser(data);

      alert("Login Succesfull");
      setRedirect(true);
    } catch (e) {
      alert("Could not login incorrect inputs");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const submit = () => {
    
    const data2 = JSON.parse(localStorage.getItem("email"))
    const data3 = JSON.parse(localStorage.getItem("password"))

    if ( data2 === email && data3 ===password) {

       navigate("/layout");  
    } else {
      alert("this is worng something");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="wrapperContainer font-poppins">
        <div className="wrapper">
          <h2> MAKE.PARKING.EASIER</h2>

          <p className="head">
            Keep all your reservations,purchases,and vehicle information in one
            place for an easy checkout{" "}
          </p>
          <form>
            <h1>Login</h1>
            <div
              className="input-box"
              style={{
                display: "flex",
                border: "1px solid white",
                borderRadius: "35px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                padding: "0.5rem",
                marginBottom: "1rem",
                margin: ".3rem",
              }}
            >
              <input
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ border: "none" }}
              />
              <FaUser className="icon" />
            </div>
            <div
              className="input-box"
              style={{
                display: "flex",
                border: "1px solid white",
                borderRadius: "35px",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                padding: "0.5rem",
                marginBottom: "1rem",
                margin: ".3rem",
              }}
            >
              <input
                type="password"
                placeholder="Enter Your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ border: "none" }}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> Remember Me{" "}
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="Submit" onClick={submit}>
              Login{" "}
            </button>
            <div
              className="register-link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p> Don't Have An Account?</p>
              <Link to={"/signup"}>
                <a>&nbsp;&nbsp;Register</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginForm;
