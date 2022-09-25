import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import design from "./App.css";
import AllContent from "./COMPONENT1/AllContent";
import HelloReact from "./COMPONENT1/HelloReact";
import Simplecounter from "./COMPONENT1/SimpleCounter";
import Weather from "./COMPONENT1/Weather";
import Calculator from "./COMPONENT1/Calculator";
import Scientificcalculator from "./COMPONENT1/ScientificCalcy";
import Searchemoji from "./COMPONENT1/Search emoji";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/react-project" element={<AllContent />} />
          <Route path="/helloworld" element={<HelloReact />} />
          <Route path="/simplecounter" element={<Simplecounter />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route
            path="/scientificcalculator"
            element={<Scientificcalculator />}
          />
          <Route path="searchemoji" element={<Searchemoji />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
