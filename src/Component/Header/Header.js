import React, { useState } from "react";
import styled from "styled-components";
import { MdArrowDropDown } from "react-icons/md";
import { cgNotes } from "react-icons/cg";
import { BiNotepad } from "react-icons/bi";

const Header = ({ clr }) => {
  return (
    <Container
      style={{
        backgroundColor: clr,
      }}
    >
      <Wrapper>
        <span>BLK</span>
        <div>Design system PRO React</div>
      </Wrapper>
      <Wrapper2>
        <a>
          <span>Get Started</span>
          <MdArrowDropDown />
        </a>
        <a>
          <cgNotes />
          <span>Section</span>
          <MdArrowDropDown />
        </a>
        <a>
          <BiNotepad />
          <span>Examples</span>
          <MdArrowDropDown />
        </a>
        <Button>Buy Now</Button>
      </Wrapper2>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 80px;
  width: 100vw;
  position: fixed;
  color: white;
  displsy: flex;
  align-items: center;
  justify-content: space-around;
  transition: all 350ms;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 17px;
  a {
    background-color: white;
  }
  div {
    margin-left: 10px;
  }
`;

const Wrapper2 = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  font-size: 17px;
  a {
    margin: 20px;
  }
`;

const Button = styled.div`
  background-color: #303f66;
  border-radius: 5px;
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
