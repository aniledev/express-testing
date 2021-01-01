const app = require("./app");

// server controlled code that starts the server listeningon the given port
app.listen(8000, () => {
  console.log("Server started on PORT 8000");
});
