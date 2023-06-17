import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Input from "./components/Input";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Input inputName="아이디" />
    </ThemeProvider>
  );
}

export default App;
