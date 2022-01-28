import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../utils/genres";
import { filterGenre, setPage } from "../../redux/actions";
import { DEFAULT } from "../../utils/globalConstants.js";
import styled from "./Filter.module.css";

const Filter = () => {
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  const inputChange = (e) => {
    if (e.target.value !== DEFAULT) {
      dispatch(filterGenre(e.target.value));
    }
    dispatch(setPage(0));
  };

  return (
    <div className={styled.container}>
      <select name="genres" onChange={inputChange}>
        <option value={DEFAULT}>Filter...</option>
        {genres.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
