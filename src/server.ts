import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("This is the Space Facts API");
});

const port = 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
