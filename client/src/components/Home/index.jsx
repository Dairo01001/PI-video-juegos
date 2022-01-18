import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getGames } from "../../redux/actions";
import Cards from "../Cards";
import Nav from "../Nav";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <Cards />
    </>
  );
};

export default Home;
