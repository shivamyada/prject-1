import { useState } from "react";

import "./App.css";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import PlacePage from "./Pages/PlacePage";
import SlotsPage from "./Pages/SlotsPage";
import LoginForm from "./Pages/LoginForm";
import SignUp from "./Pages/SignUp";
import AboutUs from "./Pages/AboutUs";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        hey
        <Route path="/layout" element={<Layout />}></Route>
        <Route path="/place/:id" element={<PlacePage />}></Route>
        <Route path="/place/:id/:date" element={<SlotsPage />}></Route>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
