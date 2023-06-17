import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import LargeBtn from "./components/LargeBtn";
import SmallBtn from "./components/SmallBtn";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header />
      <LargeBtn />
      <SmallBtn />
    </ThemeProvider>
  );
}

export default App;
