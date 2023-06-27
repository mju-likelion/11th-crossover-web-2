import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";

import Login from "./pages/LOGIN/Login";
import Signup from "./pages/JOIN/Signup";
import Main from "./pages/MAIN/Main";

import Post from "./pages/POST/Post";
import Content from "./pages/CONTENT/Content";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [loginKey, setLoginKey] = useState(false);
  const accessKey = localStorage.getItem("key");
  useEffect(() => {
    if (accessKey) {
      setLoginKey(true);
    } else {
      setLoginKey(false);
    }
  }, [accessKey]);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Header isLoggedin={loginKey} isCheckLogin={setLoginKey} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Login" element={<Login isCheckLogin={setLoginKey} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Post" element={<Post accessKey={accessKey} />} />
          <Route path="/Content" element={<Content />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
