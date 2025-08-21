const express = require("express");
const fetch = require("node-fetch");
const path = require("path");
const app = express();
const port = 3000;

// Backend URL (from docker-compose.yml or fallback)
const backendUrl = process.env.BACKEND_URL || "http://localhost:8000";

// Set EJS as view engine and views folder
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public"));

// Homepage -> fetch backend names and render index.ejs
app.get("/", async (req, res) => {
  try {
    const response = await fetch(`${backendUrl}/names`);
    const data = await response.json();
    res.render("index", { names: data });
  } catch (err) {
    console.error("Error fetching from backend:", err);
    res.status(500).send("Error: Could not fetch data from backend");
  }
});

// (Optional) keep /names route if you still want raw JSON
app.get("/names", async (req, res) => {
  try {
    const response = await fetch(`${backendUrl}/names`);
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.error("Error fetching from backend:", err);
    res.status(500).send("Error: Could not fetch data from backend");
  }
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
