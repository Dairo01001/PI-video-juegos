import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../utils/genres";
import { filterGenre, setPage } from "../../redux/actions";
import { DEFAULT } from "../../utils/globalConstants.js";

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
    <>
      <label htmlFor="genres">Genres</label>
      <select name="genres" onChange={inputChange}>
        <option value={DEFAULT}>...</option>
        {genres.map(({ id, name }) => (
          <option key={id} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button>Games DB</button>
    </>
  );
};

export default Filter;
