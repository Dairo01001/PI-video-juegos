import { useDispatch } from "react-redux";
import { nextPage, previousPage } from "../../redux/actions";

const Paginate = () => {
  const dispatch = useDispatch();

  const next = () => {
    dispatch(nextPage());
  };

  const previous = () => {
    dispatch(previousPage());
  };

  return (
    <>
      <button onClick={previous}>PREVIOUS</button>
      <button onClick={next}>NEXT</button>
    </>
  );
};

export default Paginate;
