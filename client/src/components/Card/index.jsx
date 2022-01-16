import { Link } from "react-router-dom";

const Card = ({ name, background_image, genres, id }) => {
  return (
    <div>
      <h1>
        <Link to={`/home/${id}`}>{name}</Link>
      </h1>
      <img src={background_image} alt={name} />
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
