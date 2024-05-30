import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      console.log(data);

      alert("Registration Succesfull");
      window.location.href = "/signup";
    } catch (e) {
      alert("Could not login incorrect inputs");
    }
  }
  const submit = () => {
    const state = {
      name,
      email,
      password,
    };
    // console.log("=====singUp", email, password);
    navigate("/", { state })
  }

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(password));
  }, [ name,email, password]);


  return (
    <div>
      <Navbar />
      <div className="wrapperContainer font-poppins">
        {" "}
        <div className="wrapper">
          <form>
            <h1>SignUp</h1>
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
                placeholder="Name"
                required
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                type="text"
                placeholder="Username"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{ border: "none" }}
              />
              <FaLock className="icon" />
            </div>
            <div className="remember-forgot">
              <label>
                {" "}
                <input type="checkbox" /> Remember Me{" "}
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button  onClick={submit}>Signup </button>
            <div
              className="register-link"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p> Don't Have An Account?</p>
              <Link to={"/login"}>
                <a>&nbsp;&nbsp;Login</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};


export default SignUp;
