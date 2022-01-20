import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../../redux/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const search = () => {
    dispatch(searchGame(input));
  };

  return (
    <section>
      <input type="text" value={input} onChange={onChange}></input>
      <button onClick={search}>SEARCH</button>
    </section>
  );
};

export default SearchBar;
