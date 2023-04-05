import { createGlobalStyle } from "styled-components";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <LoginPage />
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
