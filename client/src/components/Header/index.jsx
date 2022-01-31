import SearchBar from "../SearchBar";
import Paginate from "../Paginate";
import styled from "./Header.module.css";

const Header = () => {
  return (
    <header className={styled.header}>
      <h1>VIDEO JUEGOS</h1>
      <SearchBar />
      <Paginate />
    </header>
  );
};

export default Header;
