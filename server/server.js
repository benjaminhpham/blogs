const express = require("express");
require("dotenv").config();
const { setup } = require("./database/setup");
const postRouter = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
// setup();

app.use(express.json());

app.use("/api", postRouter);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
