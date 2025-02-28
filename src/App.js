import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Error from "./COMPONENT1/Error";
import Welcome from "./COMPONENT1/Welcomehomepage";
import AllContent from "./COMPONENT1/AllContent";
import HelloReact from "./COMPONENT1/HelloReact";
import Simplecounter from "./COMPONENT1/SimpleCounter";
import Weather from "./COMPONENT1/Weather";
import Calculator from "./COMPONENT1/Calculator";
import Scientificcalculator from "./COMPONENT1/ScientificCalcy";
import Searchemoji from "./COMPONENT1/Searchemoji";
import Chatlogin from "./COMPONENT1/./CHAT/chatlogin";
import Hello from "./COMPONENT1/./CHAT/ChatApp";
import FirstPage from "./COMPONENT1/News_App/FirstPage";
import NewsApp from "./COMPONENT1/News_App/NewsApp";
import "./COMPONENT1/News_App/FirstPage.css";

function App() {
  const location = useLocation()
  return (
    <>
    {location.pathname==="/react-project"&&<AllContent />}
          
        <Routes>
          <Route path="/react-project" element={<Welcome />}/>
          <Route path="/helloworld" element={<HelloReact />} />
          <Route path="/simplecounter" element={<Simplecounter />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/scientificcalculator"element={<Scientificcalculator />}/>
          <Route path="/searchemoji" element={<Searchemoji />} />
          <Route path="/chatlogin" element={<Chatlogin />} />
          <Route path="/ChatApp" element={<Hello />} />
          <Route path="*" element={<Error />} />
          <Route path='/FirstPage' element={<FirstPage/>}/>
          <Route path='/NewsApp' element={<NewsApp/>}/>
          
        </Routes>
    </>
  );
  
}


export default function Root(){
return(
  <BrowserRouter>
  
  <App/>
  </BrowserRouter>
)
}