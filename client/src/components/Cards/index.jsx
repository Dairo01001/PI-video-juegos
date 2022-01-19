import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";
import Card from "../Card";
import Loader from "../Loader";
import styled from "./Cards.module.css";

const Cards = () => {
  const games = useSelector((state) => state.games);

  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length < 100) {
      dispatch(getGames());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (games.length === 0) {
    return <Loader />;
  }

  return (
    <div className={styled.band}>
      {games.map((game) => (
        <Card
          key={game.id}
          id={game.id}
          name={game.name}
          background_image={game.background_image}
          genres={game.genres}
        />
      ))}
    </div>
  );
};

export default Cards;
