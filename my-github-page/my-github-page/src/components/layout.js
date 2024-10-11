import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background: #282c34;
  color: white;
  text-align: center;
`;

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

const Layout = ({ children }) => (
  <Container>
    <Header>
      <h1>My Portfolio</h1>
    </Header>
    <Main>{children}</Main>
  </Container>
);

export default Layout;