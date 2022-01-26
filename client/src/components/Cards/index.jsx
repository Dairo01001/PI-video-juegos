import { useSelector } from "react-redux";
import { GAMES_PER_PAGE } from "../../utils/globalConstants.js";
import Card from "../Card";
import Paginate from "../Paginate";
import styled from "./Cards.module.css";

import { paginate } from "../../utils/paginateGames.js";
import Loader from "../Loader/index.jsx";

const Cards = () => {
  const page = useSelector((state) => state.page);
  const currentGames = useSelector((state) => state.currentGames);
  const games = useSelector((state) => state.games);

  if (games.length === 0) return <Loader />;

  if (currentGames.length === 0) return <h1>Games not Found</h1>;

  return (
    <>
      <Paginate />
      <div className={styled.band}>
        {paginate(currentGames, page, GAMES_PER_PAGE).map(
          ({ id, name, background_image, genres, rating }) => (
            <Card
              key={id}
              id={id}
              name={name}
              background_image={background_image}
              genres={genres}
              rating={rating}
            />
          )
        )}
      </div>
    </>
  );
};

export default Cards;
