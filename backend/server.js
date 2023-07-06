const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Users
app.get("/api/users", (req, res) => {
  res.status(200).json({ mssg: "Welcome to FitQuest API" });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
