import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";
import { GAMES_PER_PAGE } from "../../utils/globalConstants.js";
import Card from "../Card";
import Loader from "../Loader";
import styled from "./Cards.module.css";

const Cards = () => {
  const games = useSelector((state) => state.games);
  const page = useSelector((state) => state.page);

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
      {games
        .slice(GAMES_PER_PAGE * page, page * GAMES_PER_PAGE + GAMES_PER_PAGE)
        .map(({ id, name, background_image, genres }) => (
          <Card
            key={id}
            id={id}
            name={name}
            background_image={background_image}
            genres={genres}
          />
        ))}
    </div>
  );
};

export default Cards;
