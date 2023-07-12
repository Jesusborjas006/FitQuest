require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose")
const userRoutes = require("./routes/users");
const exerciseRoutes = require("./routes/exercises")

const app = express();
const cors = require("cors")

// Middleware
app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000"
}))

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Users
app.use("/api/users", userRoutes);

// Exercises
app.use("/api/exercises", exerciseRoutes)

// Conenct to Database
mongoose.connect(process.env.MONGO_URI)
  .then(() =>{
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error)
  })