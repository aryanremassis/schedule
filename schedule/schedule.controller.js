const Model = require("./schedule.model");
const moment = require("moment");

exports.getSchedule = (req, res) => {
  const { date } = req.params;
  Model.getSchedule(
    {
      date,
    },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "Server error" });
      } else {
        return res.json({ data });
      }
    }
  );
};
