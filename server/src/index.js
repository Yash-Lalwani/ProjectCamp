import dotenv from "dotenv";
import express from "express";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.get("/instagram", (req, res) => {
  res.send("this is the instgram route");
});

app.listen(port, () => {
  console.log(`app is listening to port ${port}`);
});
