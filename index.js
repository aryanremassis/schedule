const express = require("express");
const schedule = require("./schedule/schedule.route");

const app = express();

app.use("/schedule", schedule);

app.listen(5000, () => console.log("Server running"));
