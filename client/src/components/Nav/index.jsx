import { Link } from "react-router-dom";
import Paginate from "../Paginate";
import styled from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={styled.head}>
      <h1>VIDEO GAMES</h1>
      <Paginate />
      <nav>
        <Link to="/home/sortorfilter">Sort or Filter</Link>
        <Link to="/home/creategame">Create Game</Link>
        <Link to="/home/sortorfilter">Buscar</Link>
      </nav>
    </header>
  );
};

export default Nav;
