import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as data from "../../db.json";
import Card from "../components/Card";

configure({ adapter: new Adapter() });

describe("<Card />", () => {
  let gameCard;
  let game = data.games[0];
  let game1 = data.games[1];

  beforeEach(() => {
    gameCard = (game) => {
      return shallow(
        <Card
          name={game.name}
          rating={game.rating}
          background_image={game.background_image}
          id={game.id}
          genres={game.genres}
        />
      );
    };
  });

  it("Deberia renderizar un h1 que contenga el nombre del game", () => {
    expect(gameCard(game).find("h1").at(0).text()).toBe(game.name);
    expect(gameCard(game1).find("h1").at(0).text()).toBe(game1.name);
  });

  it("Deberia renderizar un span que contenga el rating", () => {
    expect(gameCard(game).find("span").at(0).text()).toBe(`${game.rating}/5`);
    expect(gameCard(game1).find("span").at(0).text()).toBe(`${game1.rating}/5`);
  });

  it("Deberia renderizar un ul", () => {
    expect(gameCard(game).find("ul").length).toBe(1);
    expect(gameCard(game1).find("ul").length).toBe(1);
  });

  it("Deberia renderizar li dependiendo de la cantidad de genres", () => {
    expect(gameCard(game).find("li").length).toBe(game.genres.length);
    expect(gameCard(game1).find("li").length).toBe(game1.genres.length);
  });

  it("Deberia renderizar un li con el texto con el name del genre que se este renderizando", () => {
    expect(gameCard(game).find("li").at(0).text()).toBe(game.genres[0].name);
    expect(gameCard(game1).find("li").at(0).text()).toBe(game1.genres[0].name);
    expect(gameCard(game1).find("li").at(1).text()).toBe(game1.genres[1].name);
  });
});
