require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./conn/conn");
const path = require("path");
const auth = require("./routes/auth");
const list = require("./routes/list");
const port = process.env.PORT || 3001; 

app.use(express.json());
app.use(cors());

app.use("/api/v1", auth);
app.use("/api/v2", list);
// app.use("/signup", auth);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
