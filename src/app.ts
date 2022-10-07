import express from "express";
import "express-async-errors";

const app = express();

app.get("/planets", (req, res) => {
  res.json([{ name: "mercury" }, { name: "venus" }]);
});

export default app;
