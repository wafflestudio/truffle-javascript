import { createGlobalStyle } from 'styled-components';
import { LoginPage } from './pages/LoginPage';

export function App() {
  return (
    <>
      <GlobalStyle />
      <LoginPage />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
