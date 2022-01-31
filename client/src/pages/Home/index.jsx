import Cards from "../../components/Cards";
import Header from "../../components/Header";
import Order from "../../components/Order";
import Filter from "../../components/Filter";
import { Link } from "react-router-dom";
import { allGames, setPage, getGamesDB } from "../../redux/actions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";

import styled from "./Home.module.css";

const Home = () => {
  document.title = "Games | Home";

  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();
  if (games.length < 100) {
    dispatch(getGames());
  }

  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styled.container}>
      <Header />
      <div className={styled.filterOptions}>
        <button>
          <Link to="/home/creategame">CREAR JUEGO</Link>
        </button>
        <button
          onClick={() => {
            dispatch(allGames());
          }}
        >
          JUEGOS
        </button>
        <button
          onClick={() => {
            dispatch(getGamesDB());
          }}
        >
          JUEGOS BD
        </button>
        <Filter />
        <Order />
      </div>
      <Cards />
    </div>
  );
};

export default Home;
