import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";

import Login from "./pages/Login/Login";
import Signup from "./pages/Join/Signup";
import Main from "./pages/Main/Main";
import Post from "./pages/Post/Post";
import PostContent from "./pages/Content/PostContent";


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
          <Route path="/Login" element={<Login isLogin={setLoginKey} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Content/:id" element={<PostContent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
