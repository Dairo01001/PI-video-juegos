import { paginate } from "../utils/paginateGames";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

describe("Test paginate func", () => {
  it("Retorna un array", () => {
    expect(Array.isArray(paginate(arr, 0, 1))).toBe(true);
  });

  it("Retorna un array diferente dependiendo de la page, y la cantidad de elementos por page", () => {
    expect(paginate(arr, 0, 4)).not.toEqual(paginate(arr, 0, 5));
  });

  it("Deberia retornar dos array diferentes cuando se les pasa diferentes page", () => {
    expect(paginate(arr, 0, 5)).not.toEqual(paginate(arr, 1, 5));
  });

  it("Deberia retornar el inicio si, la siguiente page no contiene ningun item", () => {
    expect(paginate(arr, 0, 5)).toEqual(paginate(arr, 3, 5));    
  })
});
