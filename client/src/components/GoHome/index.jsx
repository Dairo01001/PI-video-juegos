import { Link } from "react-router-dom";
import styled from "./GoHome.module.css";

const GoHome = () => {
  return (
    <Link to="/home" className={styled.button}>
      BACK
    </Link>
  );
};

export default GoHome;
