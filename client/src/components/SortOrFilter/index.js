import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards";
import SearchBar from "../SearchBar";
import styled from "./SortOrFilter.module.css";
import { setPage } from "../../redux/actions";

const SortOrFilter = () => {
  const sortOrFilter = useSelector((state) => state.sortOrFilter);

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
        <select>
          <option>mayor</option>
          <option>menor</option>
        </select>
      </div>
      <Cards games={sortOrFilter} />
    </>
  );
};

export default SortOrFilter;
