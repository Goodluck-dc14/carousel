import React from "react";
import styled from "styled-components";

const Body = () => {
  return (
    <Container id="Body">
      <div>Body</div>
    </Container>
  );
};

export default Body;
const Container = styled.div`
  height: 40rem;
  width: 100%;
  background-color: blue;
`;
