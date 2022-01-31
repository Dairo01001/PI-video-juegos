import { useState, useEffect } from "react";
import { getGenres } from "../../utils/genres";
import { getPlatforms } from "../../utils/platforms";
import { useDispatch } from "react-redux";

import { sendDB } from "../../utils/sendGame";
import styled from "./CreateGame.module.css";
import GoHome from "../../components/GoHome";
import { getGames } from "../../redux/actions";
import { DEFAULT } from "../../utils/globalConstants";

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

  if (input.genres?.length === 0) {
    err.genres = "Escoje al menos un genero";
  }

  if (input.platforms?.length === 0) {
    err.platforms = "Escoje al menos una plataforma";
  }

  return err;
};

const isValid = (err) => {
  return (
    !err.description &&
    !err.name &&
    !err.rating &&
    !err.platforms &&
    !err.genres
  );
};

const CreateGame = () => {
  document.title = "Games | Create Game";
  const [genres, setGenres] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const dispatch = useDispatch();

  const [err, setErr] = useState({});

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
    if (e.target.value !== DEFAULT) {
      let key = e.target.name;
      let value = e.target.value;
      setInput({
        ...input,
        [key]:
          key === "genres" || key === "platforms"
            ? !input[key].includes(value)
              ? [...input[key], value]
              : input[key]
            : value,
      });

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
    if (isValid(err)) {
      await sendDB({
        ...input,
        rating: Number(input.rating),
        description: `<p>${input.description}</p>`,
        platforms: input.platforms.map((plat) => {
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
      setErr({});
      alert("Juego Guardado correctamente!");
    }
    alert("Completa correctamente el form!");
  };

  return (
    <div className={styled.container}>
      <form onSubmit={handleOnSubmit}>
        <fieldset>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder="name..."
            onChange={inputChange}
            required={true}
          />
          {err.name ? <span>{err.name}</span> : null}
        </fieldset>

        <fieldset>
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
          <input
            type="date"
            name="released"
            value={input.released}
            min="2022-01-01"
            max="2022-12-31"
            onChange={inputChange}
          />

          <p>{input.genres.map((genre) => ` ${genre} `)}</p>
          <select name="genres" onChange={inputChange}>
            <option value={DEFAULT}>Genres...</option>
            {genres.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          {err.genres ? <span>{err.genres}</span> : null}

          <p>{input.platforms.map((plat) => ` ${plat} `)}</p>
          <select name="platforms" onChange={inputChange}>
            <option value={DEFAULT}>Platforms...</option>
            {platforms.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          {err.platforms ? <span>{err.platforms}</span> : null}
        </fieldset>
        <button type="submit">SAVE</button>
      </form>
      <GoHome />
    </div>
  );
};

export default CreateGame;
