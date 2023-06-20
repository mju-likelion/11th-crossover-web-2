import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Input from "./components/Input";
import LargeBtn from "./components/LargeBtn";
import SmallBtn from "./components/SmallBtn";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Input inputName="아이디" />
      <Header isLoggedin={true} />
      <LargeBtn>로그인</LargeBtn>
      <SmallBtn color="green">작성하기</SmallBtn>
    </ThemeProvider>
  );
}

export default App;
