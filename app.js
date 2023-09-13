const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000; 

app.use(bodyParser.json());
app.use(cors());


app.use(express.static("build"));


app.get("/api/movies", (req, res) => {
  
  const moviesData = require("./movies.json");
  res.json(moviesData);
});

// GET route
app.get("/api/data", (req, res) => {
  res.json({ message: "GET request successful" });
});

// POST route with payload validation and error handling
app.post("/api/data", (req, res) => {
  const { data } = req.body;

  if (!data) {
    return res.status(400).json({ error: "Data is required" });
  }

  res.json({ message: "POST request successful", data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
