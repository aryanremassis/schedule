const { Router } = require("express");
const router = Router();
const Controller = require("./schedule.controller");

router.get("/get/:date", Controller.getSchedule);

module.exports = router;
