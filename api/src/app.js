const { api } = require("./server.js");

api.listen(3001, () => {
  console.log("Done!");
});
