import { useSelector } from "react-redux";
import Card from "../Card";
import Loader from "../Loader";

const Cards = () => {
  const games = useSelector((state) => state.games);

  if (games.length === 0) {
    return <Loader />;
  }

  return (
    <div>
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
