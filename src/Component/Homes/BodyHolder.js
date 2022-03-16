import React from "react";
import styled from "styled-components";
import Content from "./Content";
import HomeScreen from "./HomeScreen";

const BodyHolder = () => {
  return (
    <Container>
      <HomeScreen />
      <Content />
    </Container>
  );
};

export default BodyHolder;

const Container = styled.div`
  padding: 0 20px;
  width: 100%;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
`;
