import "./layout/Userslist/Userlist.css";
import "./App.css";
import "./layout/Forms/Forms.css";
import "./layout/Apifetch/Apifetch.css";
import "./components/Sidenav/Sidenav.css";
import "./layout/Calc/Calc.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Apifetch from './layout/Apifetch/Apifetch';
import { NextUIProvider } from "@nextui-org/react";
import { Sidenav } from "./components/Sidenav/Sidenav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forms from "./layout/Forms/Forms";
import Calc from "./layout/Calc/Calc";
import Userslist from "./layout/Userslist/Userslist";
import { Flasktry } from "./layout/Flasktry/Flasktry";
import UploadFiles from "./components/UploadFiles/UploadFiles";


function App() {
  return (
    <NextUIProvider>
      <Sidenav/>
      
      <Router>
        <div className="App">
          <Routes>
          <Route path="/upload" element={<UploadFiles/>}></Route>
            <Route path="/calc" element={<Calc />}></Route>
            <Route path="/Userlist" element={<Userslist />}></Route>
            <Route path="/Apifetch" element={<Apifetch />}></Route>
            <Route path="/form" element={<Forms />}></Route>
            <Route path="/falsktry" element={<Flasktry/>}></Route>
          </Routes>
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
