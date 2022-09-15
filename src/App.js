import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Restaurant from "./components/Restaurant";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App justify-center">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu/:id" element={<Restaurant />} />
      </Routes>
    </div>
  );
}

export default App;
