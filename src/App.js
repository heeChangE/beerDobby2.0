import React from "react";
import { Route, Routes } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import StartingPage from "./pages/StartingPage";

/**
 * App components
 */
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<StartingPage />}
        render={(props) => <StartingPage props={props} />}
      ></Route>
      <Route
        path="/result/:finalType"
        element={<ResultPage />}
        render={(props) => <ResultPage props={props} {...props} />}
      ></Route>

      
    </Routes>
  );
};

export default App;
