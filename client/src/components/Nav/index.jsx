import { Link } from "react-router-dom";
import styled from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styled.head}>
      <h1>Video Juegos</h1>
      <nav>
        <Link to="/home/creategame">Create Game</Link>
      </nav>
    </header>
  );
};

export default Nav;
