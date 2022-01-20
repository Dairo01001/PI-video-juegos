import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "../../utils/genres";
import { filterGenre } from "../../redux/actions";

const Filter = () => {
  const [genres, setGenres] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getGenres().then(setGenres);
  }, []);

  const inputChange = (e) => {
    dispatch(filterGenre(e.target.value));
  };

  return (
    <>
      <label htmlFor="genres">Genres</label>
      <select name="genres" onChange={inputChange}>
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
