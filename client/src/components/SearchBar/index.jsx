import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../../redux/actions";

import styled from "./SearchBar.module.css"

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
      <input className={styled.searchBar} type="text" value={input} onChange={onChange}></input>
    </form>
  );
};

export default SearchBar;
