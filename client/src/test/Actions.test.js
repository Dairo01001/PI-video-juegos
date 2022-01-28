import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ games: [] });

  beforeEach(() => store.clearActions());

  describe("getGames", () => {
    it("Deberia hacer un dispatch con las propiedades type 'GET_GAMES'", async () => {});
  });
});
