import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../redux/actions";

const GameDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameDetail(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const gameDetail = useSelector((state) => state.gameDetail);

  const {
    name,
    background_image,
    genres,
    description,
    released,
    ratings,
  } = gameDetail;

  return (
    <div>
      <h2>{name}</h2>
      <img src={background_image} alt={name} />
      <time dateTime={released}>{released?.replaceAll("-", "/")}</time>
      <ul>
        {genres?.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <ul>
        {ratings?.map(({ id, title, percent }) => (
          <p key={id}>
            {title}: {percent}%
          </p>
        ))}
      </ul>
    </div>
  );
};

export default GameDetail;
