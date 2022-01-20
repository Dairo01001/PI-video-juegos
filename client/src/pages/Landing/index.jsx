import { Link } from "react-router-dom";
import styled from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styled.container}>
      <button className={styled.button}>
        <Link to="/home">HOME</Link>
      </button>
    </div>
  );
};

export default Landing;
