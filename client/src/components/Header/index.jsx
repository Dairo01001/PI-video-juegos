import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Order from "../Order";
import Filter from "../Filter";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { allGames, setPage, getGamesDB } from "../../redux/actions";
import styled from "./Header.module.css";

const Header = () => {
  const dispatch = useDispatch();

  const getGames = () => {
    dispatch(allGames());
  };

  const getGameDB = () => {
    dispatch(getGamesDB());
  };

  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={styled.header}>
      <h1>Video Games</h1>
      <SearchBar />
      <Link to="/home/creategame">Create Game</Link>
      <button onClick={getGames}>all games</button>
      <button onClick={getGameDB}>Games DB</button>
      <Filter />
      <Order />
    </header>
  );
};

export default Header;
