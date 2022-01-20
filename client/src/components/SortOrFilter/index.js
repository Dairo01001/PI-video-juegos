import { useSelector } from "react-redux";
import Card from "../Card";
import SearchBar from "../SearchBar";
import styled from "./SortOrFilter.module.css";

const SortOrFilter = () => {
  const sortOrFilter = useSelector((state) => state.sortOrFilter);

  return (
    <>
      <div className={styled.header}>
        <h1>Sort or Filter</h1>
        <SearchBar />
      </div>
      <div className={styled.band}>
        {sortOrFilter.map(({ id, name, background_image, genres }) => (
          <Card
            key={id}
            id={id}
            name={name}
            background_image={background_image}
            genres={genres}
          />
        ))}
      </div>
    </>
  );
};

export default SortOrFilter;
