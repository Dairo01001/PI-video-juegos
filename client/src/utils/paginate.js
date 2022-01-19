export const GAMES_PAGE = 15;

export const getGamesPage = (games, page) => {
  return games.slice(page * GAMES_PAGE, GAMES_PAGE + (page * GAMES_PAGE));
};
