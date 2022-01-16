import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getGames } from "../../redux/actions";
import Cards from "../Cards";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Video Juegos</h1>
      <Link to="/home/creategame">Create Game</Link>
      <Cards />
    </div>
  );
};

export default Home;
