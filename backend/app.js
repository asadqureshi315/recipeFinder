const express = require("express");
const path = require("path");
const connect = require("./config/connect");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json());
app.use("/upload", express.static(path.join(__dirname, "upload")));

app.get("/", (req, res) => {
  return res.json("Working");
});

app.use("/api/v1/recipe", require("./routes/recipe.route"));

const PORT = process.env.PORT || 3000;
async function start() {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`app listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
