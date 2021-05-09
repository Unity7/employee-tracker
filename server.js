//import express
const express = require("express");

//import connection
const db = require("./db/connection");

//import routes
const apiRoutes = require("./routes/apiRoutes");

//set port
const PORT = process.env.PORT || 3001;

//instance of express named app
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// set api to API routes Folder
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

const sql = `SELECT * FROM department`;
//set port to listen
// Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log("Database connected.");
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });
