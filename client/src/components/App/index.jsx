import Home from "../Home";
import Landing from "../Landing";
import GameDetail from "../GameDetail";
import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:id" element={<GameDetail />} />
      </Routes>
    </div>
  );
};

export default App;
