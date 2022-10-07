import express from "express";
import "express-async-errors";

const app = express();

app.get("/", (req, res) => {
  res.send("This is the Space Facts API");
});

export default app;
