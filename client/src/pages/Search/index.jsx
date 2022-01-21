import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "../../components/Cards";
import SearchBar from "../../components/SearchBar";
import Order from "../../components/Order";
import styled from "./Search.module.css";
import { setPage } from "../../redux/actions";
import Filter from "../../components/Filter";

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setPage(0));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styled.header}>
        <h1>Sort or Filter</h1>
        <SearchBar />
        <Filter />
        <Order />
      </div>
      <Cards />
    </>
  );
};

export default Search;
