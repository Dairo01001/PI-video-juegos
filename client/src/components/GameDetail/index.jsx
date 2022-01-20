import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../redux/actions";
import Loader from "../Loader";

import styled from "./GameDetail.module.css";

const GameDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGameDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gameDetail = useSelector((state) => state.gameDetail);

  if (!gameDetail.hasOwnProperty("name")) {
    return <Loader />;
  }

  const {
    name,
    background_image,
    genres,
    description,
    released,
    rating,
    platforms,
  } = gameDetail;

  return (
    <div className={styled.card}>
      <div className={styled.thumbnail}>
        <img
          className={styled.img_left}
          src={
            background_image
              ? background_image
              : "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
          }
          alt={name}
        />
      </div>
      <div className={styled.div_right}>
        <h1 className={styled.title}>{name}</h1>
        <ul>
          {genres.map((genre) => (
            <li className={styled.genre} key={genre.id}>
              {genre.name}
            </li>
          ))}
        </ul>
        <div className={styled.separator}></div>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
      <time className={styled.date} dateTime={released}>
        {released}
      </time>
      <div className={styled.uls}>
        <ul>
          {platforms.map(({ name }) => (
            <li className={styled.platform} key={name}>
              {name}
            </li>
          ))}
        </ul>
        <p>{rating}</p>
      </div>
    </div>
  );
};

export default GameDetail;
