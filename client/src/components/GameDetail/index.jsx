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

  const { name, background_image} = useSelector(
    (state) => state.gameDetail
  );

  return (
    <div>
      <h2>{name}</h2>
      <img src={background_image} alt={name} />
    </div>
  );
};

export default GameDetail;
