import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const [localstorage, setLocalStorage] = useLocalStorage("theme");

  const buttonHandler = () => {
    // console.log(localstorage);
    // console.log("clicked!!");
    // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
    if (localstorage === "dark") {
      setLocalStorage("light");
    } else {
      setLocalStorage("dark");
    }
  };

  const fetchHandler = async () => {
    try {
      const res = await fetch("/people", { method: "GET" });
      const response = await res.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>Hello</div>
      <button onClick={buttonHandler}>X</button>
      <button onClick={fetchHandler}>OOO</button>
    </>
  );
};

export default App;
