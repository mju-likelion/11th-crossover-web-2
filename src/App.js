import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
