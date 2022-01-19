import { Link } from "react-router-dom";
import Paginate from "../Paginate";
import SearchBar from "../SearchBar";
import styled from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styled.head}>
      <h1>VIDEO GAMES</h1>
      <SearchBar />
      <Paginate />
      <nav>
        <Link to="/home/creategame">Create Game</Link>
      </nav>
    </header>
  );
};

export default Nav;
