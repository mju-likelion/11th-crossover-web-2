import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Login from "./pages/LOGIN/Login";
import Signup from "./pages/JOIN/Signup";
import Main from "./pages/MAIN/Main";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header isLoggedin={true} />
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
