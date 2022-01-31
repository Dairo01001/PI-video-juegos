import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGame } from "../../redux/actions";

import styled from "./SearchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const search = (e) => {
    e.preventDefault();
    if (input && /^[A-Za-z0-9\s]+$/g.test(input)) {
      dispatch(searchGame(input));
      setInput("");
    } else {
      alert("Nombre de la busqueda, Incorrecto!");
    }
  };
  
  return (
    <form onSubmit={search}>
      <input
        className={styled.searchBar}
        type="text"
        value={input}
        onChange={onChange}
        placeholder="Buscar"
      ></input>
    </form>
  );
};

export default SearchBar;
