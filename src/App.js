import "./App.css";
import Carousel from "./components/Carousel";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Switch,
// } from "react-router-dom";

function App() {
  return (
    <div className="App justify-center">
      <Header />
      <Carousel />
      <Menu />
    </div>
  );
}

export default App;
