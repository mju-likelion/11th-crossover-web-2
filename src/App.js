import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import Post from "./pages/POST/Post";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Header isLoggedin={true} />
      <Post title="안녕" />
    </ThemeProvider>
  );
}

export default App;
