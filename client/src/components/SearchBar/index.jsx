import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../../redux/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    dispatch(searchGame(input));
    setInput("");
  };

  return (
    <form onSubmit={search}>
      <input type="text" value={input} onChange={onChange}></input>
    </form>
  );
};

export default SearchBar;
