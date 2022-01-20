import Home from "../Home";
import Landing from "../Landing";
import GameDetail from "../GameDetail";
import CreateGame from "../CreateGame";
import { Routes, Route } from "react-router-dom";
import SortOrFilter from "../SortOrFilter";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<Home />} />
        <Route path="home/:id" element={<GameDetail />} />
        <Route path="home/creategame" element={<CreateGame />} />
        <Route path="home/sortorfilter" element={<SortOrFilter />} />
      </Routes>
    </div>
  );
};

export default App;
