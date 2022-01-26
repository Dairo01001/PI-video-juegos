import Cards from "../../components/Cards";
import Header from "../../components/Header";

import { useSelector, useDispatch } from "react-redux";
import { getGames } from "../../redux/actions";

const Home = () => {
  document.title = "Games | Home";

  const games = useSelector((state) => state.games);
  const dispatch = useDispatch();
  if (games.length < 100) {
    dispatch(getGames());
  }

  return (
    <>
      <Header />
      <Cards />
    </>
  );
};

export default Home;
