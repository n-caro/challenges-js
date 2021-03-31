const express = require("express");
const routes = require("./routes");
const app = express();
const { PORT } = require("./config");

app.use("/", routes);

app.listen(PORT, () => console.log(`🚀 Listening on port: ${PORT}`));
