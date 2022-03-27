const express = require("express");
const app = express();
const PORT = 8000;

// Custom Middleware
const customMiddleware = (req, res, next) => {
	console.log("Middleware executed");
	next();
};

// Routes
app.get("/", (req, res) => {
	console.log("home");
	res.send("Hello World");
});

app.get("/about", customMiddleware, (req, res) => {
	console.log("about");
	res.send("about page");
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
