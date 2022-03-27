const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

require("./models/user");

app.use(express.json());
app.use(require("./routes/auth"));

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

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
