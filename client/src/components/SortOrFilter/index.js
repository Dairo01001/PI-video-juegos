import { useSelector } from "react-redux";
import Cards from "../Cards";
import SearchBar from "../SearchBar";
import styled from "./SortOrFilter.module.css";

const SortOrFilter = () => {
  const sortOrFilter = useSelector((state) => state.sortOrFilter);

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
