import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Cards from "../Cards";
import Nav from "../Nav";
import { getGames, setPage } from "../../redux/actions";

const Home = () => {
  const games = useSelector((state) => state.games);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    return () => {
      dispatch(setPage(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <Cards games={games} />
    </>
  );
};

export default Home;
