import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../utils/genres";
import { filterGenre, setPage, getGamesDB } from "../../redux/actions";
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

  const getGameDB = () => {
    dispatch(getGamesDB());
  };

  return (
    <div className={styled.container}>
      <label htmlFor="genres">Filter</label>
      <select name="genres" onChange={inputChange}>
        <option value={DEFAULT}>Select...</option>
        {genres.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={getGameDB}>Games DB</button>
    </div>
  );
};

export default Filter;
