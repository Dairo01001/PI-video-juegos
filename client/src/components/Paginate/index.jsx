import { useDispatch } from "react-redux";
import { nextPage, previousPage } from "../../redux/actions";
import styled from "./Paginate.module.css";

const Paginate = () => {
  const dispatch = useDispatch();

  const next = () => {
    dispatch(nextPage());
  };

  const previous = () => {
    dispatch(previousPage());
  };

  return (
    <div className={styled.container}>
      <button onClick={previous}>❮ Anterior</button>
      <button onClick={next}>Siguiente ❯</button>
    </div>
  );
};

export default Paginate;
