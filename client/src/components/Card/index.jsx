import { NavLink } from "react-router-dom";
import styled from "./Card.module.css";


const Card = ({ name, background_image, genres, id }) => {
  const divImg = {
    backgroundImage: `url(${background_image ? background_image : "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"})`,
  };

  return (
    <NavLink to={`/home/${id}`} className={styled.card}>
      <div style={divImg}></div>
      <article>
        <h1>{name}</h1>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </article>
    </NavLink>
  );
};

export default Card;
