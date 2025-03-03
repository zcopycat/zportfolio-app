import React from "react";
import MyRoutes from "./components/routing/MyRoutes.jsx";
import { ThemeProvider } from "./components/ThemeContext.jsx"; //import Theme Context component

function App() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider>
        <h1>Zane Vilsdorfa Portfolio</h1>
        <MyRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
