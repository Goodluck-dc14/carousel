import React from "react";
import styled from "styled-components";
import Image from "./logo.svg";
import { animateScroll as scroll, Link } from "react-scroll";

const HeaderNav = () => {
  return (
    <Container>
      <Logo
        src={Image}
        onClick={() => {
          scroll.scrollToTop();
        }}
      />
      <Wrapper>
        <Link
          offset={-70}
          activeClass="active"
          to="Home"
          smooth={true}
          duration={1000}
        >
          <div>home</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Body"
          smooth={true}
          duration={1000}
        >
          <div>Body</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Project"
          smooth={true}
          duration={1000}
        >
          <div>Project</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Gallery"
          smooth={true}
          duration={1000}
        >
          <div>Galleries</div>
        </Link>

        <Link
          offset={-70}
          activeClass="active"
          to="Footer"
          smooth={true}
          duration={1000}
        >
          <div>Footer</div>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default HeaderNav;

const Logo = styled.img`
  width: 150px;
  height: 70px;
  object-fit: contain;
  margin: 0 20px;
`;

const Container = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #22272e;
  display: flex;
  align-items: center;
  position: fixed;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  div {
    font-size: 12px;
    font-weight: bold;
    margin: 0 20px;
    opacity: 0.6;
    color: white;
    text-transform: uppercase;

    &:hover {
      cursor: pointer;
      opacity: 1;
    }
  }
`;
