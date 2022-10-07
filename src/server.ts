import "dotenv/config";
import app from "./app";

const port = process.env.port;

app.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
