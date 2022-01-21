import { useState } from "react";
import { getGenres } from "../../utils/genres";
import { getPlatforms } from "../../utils/platforms";
import { useEffect } from "react";

import { sendDB } from "../../utils/sendGame";
import styled from "./CreateGame.module.css";

const CreateGame = () => {
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "2022-01-18",
    rating: 0,
    genres: [],
    platforms: [],
  });

  const findId = (nameI) => {
    return genres.find(({ name }) => {
      return name === nameI;
    }).id;
  };

  const findPlatform = (nameP) => {
    return platforms.find(({ name }) => name === nameP);
  };

  useEffect(() => {
    getGenres().then(setGenres);
    getPlatforms().then(setPlatforms);
  }, []);

  const inputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.name === "genres"
          ? [...input[e.target.name], findId(e.target.value)]
          : e.target.name === "platforms"
          ? [...input[e.target.name], findPlatform(e.target.value)]
          : e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await sendDB({ ...input, rating: Number(input.rating) });
  };

  return (
    <div className={styled.container}>
      <form onSubmit={handleOnSubmit}>
        <h1>Create Game</h1>
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="name..."
            onChange={inputChange}
            required={true}
          />

          <label>Released</label>
          <input
            type="date"
            name="released"
            value={input.released}
            min="2022-01-01"
            max="2022-12-31"
            onChange={inputChange}
          />

          <label>Rating</label>
          <input
            type="number"
            name="rating"
            min="0"
            max="5"
            value={input.rating}
            onChange={inputChange}
          />
        </fieldset>
        <fieldset>
          <label>Description</label>
          <textarea
            name="description"
            value={input.description}
            onChange={inputChange}
            placeholder="description..."
            required={true}
          ></textarea>
        </fieldset>

        <fieldset>
          <label>Genres</label>
          <select name="genres" onChange={inputChange}>
            {genres.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>

          <label>Platforms</label>
          <select name="platforms" onChange={inputChange}>
            {platforms.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default CreateGame;
