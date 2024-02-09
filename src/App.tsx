/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import useThemeStore from "./zustand";
// import { IconContext } from "react-icons";
import { FaAirbnb } from "react-icons/fa";
import styled from "styled-components";

const Wrap = styled.div`
  width: 24px;
  cursor: pointer;
  :hover {
    fill: red;
  }
`;

const App = () => {
  const [data, setData] = useState<any>([]);
  const [localstorage, setLocalStorage] = useLocalStorage("theme");
  const { theme, updateTheme } = useThemeStore();

  useEffect(() => {}, [updateTheme]);

  console.log(theme, theme ? "다크" : "라이트");
  console.log(localstorage);

  const buttonHandler = () => {
    if (theme) {
      updateTheme(false);
      setLocalStorage("light");
    } else {
      updateTheme(true);
      setLocalStorage("dark");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await fetch("/dummy", { method: "GET" });
      const response = await res.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Hello</div>
      <Wrap>
        <FaAirbnb size="24" color="red" fill="blue" />
      </Wrap>
      <button onClick={buttonHandler}>X</button>
      <button onClick={fetchHandler}>OOO</button>
      {data &&
        data.map((val: any) => {
          return <div key={val.id}>{val.lang}</div>;
        })}
    </>
  );
};

export default App;
