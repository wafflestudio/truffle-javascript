import styled from 'styled-components';

export const LoginPage = () => {
  return (
    <Wrapper>
      <Left />
      <Right>
        <LoginButton>LOG IN VIA GITHUB</LoginButton>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Left = styled.div`
  flex: 1;
  background-image: url("https://avatars.slack-edge.com/2023-01-09/4602907042359_26481362e89cf34f3794_192.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Right = styled.div`
  width: max(25%, 300px);
  background-color: #f5f5f5;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 20px;
`;

const LoginButton = styled.button`
  background-color: #000;
  color: #fff;
  border: none;
  padding: 20px 30px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #333;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  }
`;
