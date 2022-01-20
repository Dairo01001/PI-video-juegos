import { useSelector } from "react-redux";
import { GAMES_PER_PAGE } from "../../utils/globalConstants.js";
import Card from "../Card";
import Paginate from "../Paginate";
import styled from "./Cards.module.css";

const Cards = (props) => {
  const page = useSelector((state) => state.page);

  const { games } = props;

  return (
    <>
      <Paginate />
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
    </>
  );
};

export default Cards;
