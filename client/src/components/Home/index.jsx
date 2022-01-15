import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRoot } from "../../redux/actions";

const Home = () => {
  const hello = useSelector((state) => state.root);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoot());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Video Juegos</h1>
      <p>{hello.msg}</p>
    </div>
  );
};

export default Home;
