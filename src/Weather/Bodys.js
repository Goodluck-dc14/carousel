import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "antd";
import image from "./img.png";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const api = {
  key: "19bc063303d344ae061a992be6080d89",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Bodys = () => {
  const [search, setSearch] = useState("");
  const [fetchWeather, setFetchWeather] = useState("");

  const SubmitSearch = async () => {
    const result = await axios(
      `${api.base}weather?q=${search}&units=metric&appid=${api.key}`
    );
    console.log(result.data);
    if (result) {
      return setFetchWeather(result.data);
    }
  };

  const dataBuilder = (d) => {
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const month = [
      "January",
      "Febuary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = d.getDay[d.getDay()];
    let months = month[d.getMonth()];
    let dates = d.getDate();
    let year = d.getFullYear();

    console.log(days);
    console.log(months);
    console.log(dates);
    console.log(year);

    return `${days} ${dates} ${months} ${year}`;
  };

  useEffect(() => {
    SubmitSearch();
  }, []);

  return (
    <div>
      {fetchWeather ? (
        <>
          <Container>
            <Hello>
              <Input
                value={search}
                onChange={(e) => {}}
                onKeyPress={SubmitSearch}
                placeholder="search"
                prefix={<AiOutlineSearch />}
              />
            </Hello>
            <Date>{dataBuilder(new Date())}</Date>
            <Loc>
              {fetchWeather.name},{fetchWeather.sys.country}
            </Loc>
            <Cen>{Math.round(fetchWeather.main.temp)}</Cen>
            <Description>Rainy</Description>
          </Container>
        </>
      ) : (
        <Container>
          <Hello>
            <Input
              value={search}
              onChange={(e) => {}}
              onKeyPress={SubmitSearch}
              placeholder="search"
              prefix={<AiOutlineSearch />}
            />
          </Hello>
          <Date>{dataBuilder(new Date())}</Date>
          <Loc>Default, null</Loc>
          <Cen>0°c</Cen>
          <Description>Description</Description>
        </Container>
      )}
    </div>
  );
};

export default Bodys;

const Container = styled.div`
  background-image: url(${image});
  height: 100vh;
  width: 100vw;
  display: flex;
  // justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Hello = styled.div`
  height: 50px;
  width: 320px;
  margin-top: 10px;
`;

const Date = styled.div`
  font-size: 50px;
  color: white;
`;

const Loc = styled.div`
  font-size: 50px;
  color: white;
`;

const Cen = styled.div`
  height: 300px;
  width: 500px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
`;

const Description = styled.div`
  font-size: 50px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
