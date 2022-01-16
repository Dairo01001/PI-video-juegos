import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getGames } from "../../redux/actions";
import Card from "../Card";

const Home = () => {
  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Video Juegos</h1>
      <div>
        {games.map((game) => (
          <Card
            key={game.id}
            name={game.name}
            background_image={game.background_image}
            genres={game.genres}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
