import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const slider = useRef();
  const slider1 = useRef();
  const slider2 = useRef();

  const [mySlider, setMySlider] = useState([
    "/images/shirt.png",
    "/images/shirt1.png",
    "/images/shirt2.png",
    "/images/shirt3.png",
  ]);

  const slideColor = ["white", "gray", "gray"];
  const slideColor1 = ["gray", "white", "gray"];
  const slideColor2 = ["gray", "gray", "white"];

  const add = count % 3;

  const nextButton = () => {
    setCount(count + 1);
  };

  const previusButton = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    slider.current.style.background = slideColor[add];
    slider1.current.style.background = slideColor1[add];
    slider2.current.style.background = slideColor2[add];
  }, [count]);

  useEffect(() => {
    setInterval(() => {
      setCount((r) => r + 1);
    }, 5000);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Button
          onClick={() => {
            previusButton();
          }}
        >
          <FaLessThan />
        </Button>
        {/* <Holder>{add}</Holder> */}
        <Sliders>
          <SliderImage src={mySlider[add]} />
          <BarSlider>
            <Bar
              ref={slider}
              onClick={() => {
                setCount(0);
              }}
            />
            <Bar
              ref={slider1}
              onClick={() => {
                setCount(1);
              }}
            />
            <Bar
              ref={slider2}
              onClick={() => {
                setCount(2);
              }}
            />
          </BarSlider>
        </Sliders>
        <Button
          onclick={() => {
            nextButton();
          }}
        >
          <FaGreaterThan />
        </Button>
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const Wrapper = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: linear-gradient(180deg, #ed6c8a, #f18775);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    margin-top: 6px;
    cursor: pointer;
  }
`;

const Holder = styled.div`
  font-size: 200px;
  font-weight: bold;
`;

const SliderImage = styled.img`
  width: 500px;
  height: 400px;
  object-fit: contain;
`;

const Bar = styled.div`
  height: 5px;
  width: 50px;
  background: white;
  border-radius: 2px;
  cursor: pointer;
`;

const BarSlider = styled.div`
  width: 170px;
  height: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Sliders = styled.div`
  width: 500px;
  height: 440px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
