import { useState, useEffect } from "react";
import { getGenres } from "../../utils/genres";
import { getPlatforms } from "../../utils/platforms";
import { useDispatch } from "react-redux";

import { sendDB } from "../../utils/sendGame";
import styled from "./CreateGame.module.css";
import GoHome from "../../components/GoHome";
import { getGames } from "../../redux/actions";

export const validate = (input) => {
  let err = {};

  if (!input.name) {
    err.name = "Name is required!";
  } else if (!/[A-Za-z0-9]+/g.test(input.name)) {
    err.name = "Name is invalid!";
  }

  if (!input.description) {
    err.description = "Description is required!";
  } else if (!/[A-Za-z0-9]+/g.test(input.description)) {
    err.description = "Description is invalid!";
  } else if (input.description?.length < 50) {
    err.description = "Longitud mayor a 50 characters!";
  }

  if (!input.rating) {
    err.rating = "Rating is required!";
  } else if (input.rating > 5 || input.rating < 0) {
    err.rating = "Rating is invalid!";
  }

  return err;
};

const CreateGame = () => {
  document.title = "Games | Create Game";
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const dispatch = useDispatch();

  const [err, setErr] = useState({
    name: "",
    description: "",
    rating: 0,
  });

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "2022-01-18",
    rating: 0,
    genres: [],
    platforms: [],
  });

  useEffect(() => {
    getGenres().then(setGenres);
    getPlatforms().then(setPlatforms);
    return () => {
      dispatch(getGames());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.name === "genres" || e.target.name === "platforms"
          ? [...input[e.target.name], e.target.value]
          : e.target.value,
    });

    if (
      e.target.name === "name" ||
      e.target.name === "description" ||
      e.target.name === "rating"
    ) {
      setErr(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    await sendDB({
      ...input,
      rating: Number(input.rating),
      description: `<p>${input.description}</p>`,
      genres: [...new Set(input.genres)],
      platforms: [...new Set(input.platforms)].map((plat) => {
        return { name: plat };
      }),
    });
    setInput({
      name: "",
      description: "",
      released: "2022-01-18",
      rating: 0,
      genres: [],
      platforms: [],
    });
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
          {err.name ? <span>{err.name}</span> : null}

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
          {err.rating ? <span>{err.rating}</span> : null}
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
          {err.description ? <span>{err.description}</span> : null}
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
      <GoHome />
    </div>
  );
};

export default CreateGame;
