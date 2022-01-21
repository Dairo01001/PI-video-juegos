import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Order from "../Order";
import Filter from "../Filter";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import { allGames, setPage } from "../../redux/actions";

const Header = () => {
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
    <header>
      <Link to="/home/creategame">Create Game</Link>
      <button onClick={getGames}>all games</button>
      <SearchBar />
      <Filter />
      <Order />
    </header>
  );
};

export default Header;
