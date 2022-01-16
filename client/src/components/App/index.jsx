import Home from "../Home";
import Landing from "../Landing";
import { Routes, Route } from "react-router-dom";
import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
