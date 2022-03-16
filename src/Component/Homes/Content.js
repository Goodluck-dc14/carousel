import React from "react";
import styled from "styled-components";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Content = () => {
  return (
    <Container>
      <HeaderText>Eat More</HeaderText>
      <Star>
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiOutlineStar />
        <span>(76 customer review)</span>
      </Star>

      <Cash>#3,900</Cash>
      <Description>Description</Description>
      <Detail>
        Eres' daring 'Grigri Fortune' swimsuit has the fit and coverage of a
        bikini in a one-piece silhouette. This fuchsia style is crafted from the
        label's sculpting peau douce fabric and has flattering cutouts through
        the torso and back. Wear yours with mirrored sunglasses on vacation.
      </Detail>
      <Holder>
        <span>Quality</span>
        <span>Select color</span>
        <span>Select size</span>
      </Holder>
      <CircleHolder>
        <Circle>-</Circle>
        <Num>1</Num>
        <Circle2>+</Circle2>

        <Select>
          <option>Choose a color</option>
          <option>black</option>
          <option>Gray</option>
          <option>White</option>
        </Select>
        <Select1>
          <option>Choose a size</option>
          <option>Extra small</option>
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
          <option>Extra Large</option>
        </Select1>
      </CircleHolder>
      <Button>Add to cart</Button>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  margin: 20px;
  width: 500px;
  height: 500px;
  margin-left: 60px;
  margin-top: 100px;
`;

const HeaderText = styled.div`
  font-size: 50px;
  font-family: poppins;
  font-weight: bold;
  opacity: 0.8;
`;

const Star = styled.div`
  color: #f18775;
  font-size: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  span {
    color: white;
    margin-left: 10px;
    font-size: 15px;
    font-family: poppins;
  }
`;

const Cash = styled.div`
  margin-top: 20px;
  font-size: 30px;
  font-family: poppins;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const Description = styled.div`
  color: lightgray;
  font-family: poppins;
  font-size: 13px;
  margin-top: 30px;
`;

const Detail = styled.div`
  color: lightgray;
  font-family: poppins;
  font-size: 20px;
  margin-top: 39px;
  width: 450px;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 50px;
  margin-top: 30px;

  span {
    font-size: 15px;
    color: lightgray;
  }
`;

const CircleHolder = styled.div`
  height: 50px
  width: 50px;
  display: flex;
  margin-top: 20px;

`;

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #ed6c8a;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  opacity: 0.7
  cursor: pointer;
  &:hover {
    opacity: 1;
    margin-top: 6px;

  }
`;

const Num = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-left: 30px;
`;

const Circle2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  border: 2px solid #ed6c8a;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  margin-left: 30px;
  opacity: 0.7
  cursor: pointer;
  &:hover {
    opacity: 1;
    margin-top: 6px;

  }
`;

const Select = styled.select`
  height: 40px;
  width: 150px;
  background-color: transparent;
  color: lightgray;
  border: 2px solid #ed6c8a;
  border-radius: 5px;
  margin-left: 10px;
  option {
    color: black;
  }
`;

const Select1 = styled.select`
  height: 40px;
  width: 150px;
  background-color: transparent;
  color: lightgray;
  border: 2px solid #ed6c8a;
  border-radius: 5px;
  margin-left: 10px;
  option {
    color: black;
  }
`;

const Button = styled.div`
  height: 40px;
  width: 170px;
  background: linear-gradient(180deg, #ed6c8a, #f18775);
  font-size: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
