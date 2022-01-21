import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGames } from "../../redux/actions"; 
import { Link } from "react-router-dom";
import styled from "./Landing.module.css";

const Landing = () => {

  const dispatch =  useDispatch();

  useEffect(() => {
    dispatch(getGames())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styled.container}>
      <button className={styled.button}>
        <Link to="/home">HOME</Link>
      </button>
    </div>
  );
};

export default Landing;
