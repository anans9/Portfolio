import React from "react";
import { Route, Routes } from "react-router-dom";
import { Router } from "./router";
import { NotFound } from "./pages";
import { useInitialContext } from "./context/useInitialContext";

const App: React.FC = () => {
  const { theme, setTheme } = useInitialContext();

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Router theme={theme} setTheme={setTheme} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
