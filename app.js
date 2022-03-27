const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => {
	console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
	console.log("Error connecting to mongoDB", err);
});

// // Custom Middleware
// const customMiddleware = (req, res, next) => {
// 	console.log("Middleware executed");
// 	next();
// };

// // Routes
// app.get("/", (req, res) => {
// 	console.log("home");
// 	res.send("Hello World");
// });

// app.get("/about", customMiddleware, (req, res) => {
// 	console.log("about");
// 	res.send("about page");
// });

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
