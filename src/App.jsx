import React from "react";
import PizzaList from "./components/PizzaList";
import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <Header>Adis's CAFE</Header>
      <PizzaList />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-bottom: 20px;
  background-color: black;
  border-radius: 20px;
  padding: 20px;
  color: yellow;
`;

export default App;