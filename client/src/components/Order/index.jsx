import { useDispatch } from "react-redux";

import {
  DEFAULT,
  ASCENDING_ORDER,
  DESCENDING_ORDER,
} from "../../utils/globalConstants.js";
import { orderByName, orderByRating, setPage} from "../../redux/actions";

const Order = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    if (e.target.value !== DEFAULT) {
      if (e.target.name === "name") {
        dispatch(orderByName(e.target.value));
      } else {
        dispatch(orderByRating(e.target.value));
      }
    }
    dispatch(setPage(1));
    dispatch(setPage(0));
  };

  return (
    <div>
      <select name="name" onChange={onChange}>
        <option value={DEFAULT}>Ordenar por nombre</option>
        <option value={ASCENDING_ORDER}>A - Z</option>
        <option value={DESCENDING_ORDER}>Z - A</option>
      </select>

      <select name="rating" onChange={onChange}>
        <option value={DEFAULT}>Ordenar por puntaje</option>
        <option value={ASCENDING_ORDER}>Mayor a Menor</option>
        <option value={DESCENDING_ORDER}>Menor a Mayor</option>
      </select>
    </div>
  );
};

export default Order;
