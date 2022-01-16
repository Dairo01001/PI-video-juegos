import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default GameDetail;
