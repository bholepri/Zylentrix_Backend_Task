const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

//import database connection function
const connectToDb = require("./database/db");

//database connect function
connectToDb();

//user routes
const userRoutes = require("./routes/user.routes");

// Middleware to parse JSON body
app.use(express.json());

//user routes for /users endpoint
app.use("/users", userRoutes);

//Set the port number
const port = process.env.PORT || 3000;

//Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
