import express from "express";
import cors from "cors";
import { resources } from "./resources.js";

const app = express();

app.use(cors());

app.get("/resources", (req, res) => {
  res.json(resources);
});

app.listen(4000, () => {
  console.log("API running on http://localhost:4000/resources");
});
