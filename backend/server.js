require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require("./routes/users");

const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Users
app.use("/api/users", userRoutes);

// Conenct to Database
mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error)
  })