import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Main from "./pages/MAIN/Main";

// import Input from "./components/Input";
// import LargeBtn from "./components/LargeBtn";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header isLoggedin={true} />
      <Main />
    </ThemeProvider>
  );
}

export default App;
