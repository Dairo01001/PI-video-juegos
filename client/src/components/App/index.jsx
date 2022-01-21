import Home from "../../pages/Home";
import Landing from "../../pages/Landing";
import GameDetail from "../../pages/GameDetail";
import CreateGame from "../../pages/CreateGame";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:id" element={<GameDetail />} />
        <Route path="home/creategame" element={<CreateGame />} />
      </Routes>
    </div>
  );
};

export default App;
