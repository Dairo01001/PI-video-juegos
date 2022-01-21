import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import Order from "../../components/Order";
import styled from "./Search.module.css";
import { setPage, allGames } from "../../redux/actions";
import Filter from "../../components/Filter";
import Nav from "../../components/Nav";

const Home = () => {
  const dispatch = useDispatch();

  const getGames = () => {
    dispatch(allGames());
  };

  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styled.header}>
        <Nav/>
        <button onClick={getGames}>all games</button>
        <SearchBar />
        <Filter />
        <Order />
      </div>
      <Cards />
    </>
  );
};

export default Home;
