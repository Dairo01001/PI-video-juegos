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
    return <Loader/>;
  }

  const {
    name,
    background_image,
    genres,
    description,
    released,
    ratings,
    platforms,
  } = gameDetail;

  return (
    <div className={styled.container}>
      <h2 className="title">{name}</h2>
      <img src={background_image} alt={name} />
      <time dateTime={released}>{released}</time>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <ul>
        {ratings.map(({ title, percent }) => (
          <p key={title}>
            {title}: {percent}%
          </p>
        ))}
      </ul>
      <ul>
        {platforms.map(({ platform }) => (
          <li key={platform.name}>{platform.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameDetail;
