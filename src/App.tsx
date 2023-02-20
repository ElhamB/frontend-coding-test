import { memo, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Body from "./Body";
import GlobalStyles from "./globalStyles";
import Header from "./Header";

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [counter, setCounter] = useState(15);
  //toggle mode dark
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
  }
  const handleToggleMode = () => {
    setTheme(theme.mode === "dark" ? { mode: "light" } : { mode: "dark" });
  };
  //cutdown timer
  const handleCutdownTimer = () => {
    const timer = setInterval(() => {
      setCounter(prevCounter => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header
          counter={counter}
          theme={theme}
          onToggleMode={handleToggleMode}
        />
        <Body onStartTimer={handleCutdownTimer} theme={theme} />
      </>
    </ThemeProvider>
  );
}

export default memo(App);
