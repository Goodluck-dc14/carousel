import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";

const GlobalStyled = createGlobalStyle`
body{
  background-color: ${({ theme }) =>
    theme.myTheme === "dark" ? "#22272E" : "white"};
  color: ${({ theme }) => (theme.myTheme === "dark" ? "#CDD9E5" : "black")}
}

`;
const MyPortfolio = () => {
  const storeThemeChoice = () => {
    const saveTheme = storage.getItem("toggle");
    return saveTheme ? JSON.parse(saveTheme) : { myTheme: "y" };
  };
  const [toggle, setToggle] = useState(storeThemeChoice);

  useEffect(() => {
    storage.setItem("toggle", JSON.stringify(toggle));
  }, [toggle]);
  return (
    <ThemeProvider theme={toggle}>
      <GlobalStyled />
      <Container>
        <Wrap>this is my home</Wrap>
        <Button
          onClick={() => {
            setToggle(
              toggle.myTheme === "dark" ? { myTheme: "y" } : { myTheme: "dark" }
            );
          }}
        >
          Toggled Mode
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default MyPortfolio;

const Container = styled.div`
  width: 100%;
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Wrap = styled.div`
  font-size: 4rem;
  font-zeight: bold;
`;

const Button = styled.div`
  width: 120px;
  height: 40px;
  margin-top: 40px;
  border: 3px solid red;
  border-radius: 5px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 15px;
  cursor: pointer;
  transform: scale(1);
  transform: all 350ms;
  &:hover {
    transform: scale(1.06);
  }
`;
