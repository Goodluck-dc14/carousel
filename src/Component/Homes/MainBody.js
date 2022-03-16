import React from "react";
import styled from "styled-components";

const MainBody = () => {
  return (
    <Container>
      <WriteUp>Not convinced yet?</WriteUp>
      <Write>
        You need more information? Check what other persons are saying about our
        product. They are very happy with their purchase.
      </Write>
      {/* <BoxHolder>
        <img src="/images/4.png"/>
        <Box1>The networking at Web Summit is like no other European tech conference.</Box1>
        <span>Michael Elijah</span>
        <p>@Michaelelijah</p>
      </BoxHolder> */}
    </Container>
  );
};

export default MainBody;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 950px;
`;

const WriteUp = styled.div`
  font-weight: bold;
  font-size: 22px;
`;

const Write = styled.div`
  font-size: 22px;
  color: lightgray;
  text-align: center;
  letter-spacing: 1.5px;
  width: 700px;
  margin-top: 20px;
`;
