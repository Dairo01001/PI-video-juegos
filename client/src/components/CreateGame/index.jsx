import { useState } from "react";
import { getGenres } from "../../utils/genres";
import { getPlatforms } from "../../utils/platforms";
import { useEffect } from "react";

const CreateGame = () => {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "2022-01-18",
    rating: 0,
  });

  useEffect(() => {
    getGenres().then(setGenres);
    getPlatforms().then(setPlatforms);
  }, []);

  const inputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  console.log(platforms);

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="name..."
          onChange={inputChange}
          required={true}
        />
      </div>
      <div>
        <label>description</label>
        <textarea
          name="description"
          value={input.description}
          onChange={inputChange}
          placeholder="Description..."
          required={true}
        ></textarea>
      </div>
      <div>
        <label>released</label>
        <input
          type="date"
          name="released"
          value={input.released}
          min="2022-01-01"
          max="2022-12-31"
          onChange={inputChange}
        />
      </div>
      <div>
        <label>rating</label>
        <input
          type="number"
          name="rating"
          min="0"
          max="5"
          value={input.rating}
          onChange={inputChange}
        />
      </div>
      {genres.map(({ id, name }) => (
        <div key={id}>
          <input type="checkbox" id={id} name={name} onChange={inputChange} />
          <label htmlFor={id}>{name}</label>
        </div>
      ))}
      {platforms.map(({ id, name }) => (
        <div key={id}>
          <input type="checkbox" id={id} name={name} onChange={inputChange} />
          <label htmlFor={id}>{name}</label>
        </div>
      ))}
      <input type="submit" />
    </form>
  );
};

export default CreateGame;
