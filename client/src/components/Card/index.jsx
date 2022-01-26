import { NavLink } from "react-router-dom";
import styled from "./Card.module.css";

const Card = ({ name, background_image, genres, id, rating }) => {
  const divImg = {
    backgroundImage: `url(${
      background_image
        ? background_image
        : "https://images2.alphacoders.com/206/206292.jpg"
    })`,
  };

  return (
    <NavLink to={`/home/${id}`} className={styled.card}>
      <div style={divImg}>
        <span>
          <strong>{rating}</strong>/5
        </span>
      </div>
      <article>
        <h1>{name}</h1>
        <ul>
          {genres.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </article>
    </NavLink>
  );
};

export default Card;
