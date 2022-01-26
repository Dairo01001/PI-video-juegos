import { Link } from "react-router-dom";
import styled from "./GoHome.module.css";

const GoHome = () => {
  return (
    <Link to="/home" className={styled.button}>
      Back
    </Link>
  );
};

export default GoHome;
