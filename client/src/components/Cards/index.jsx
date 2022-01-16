import { useSelector } from "react-redux";
import Card from "../Card";

const Cards = () => {
  const games = useSelector((state) => state.games);
  
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
