const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const { MONGO_URI } = require("./keys");

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/post"));

mongoose.connect(MONGO_URI);
mongoose.connection.on("connected", () => {
	console.log("connected to mongoDB");
});
mongoose.connection.on("error", (err) => {
	console.log("Error connecting to mongoDB", err);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
