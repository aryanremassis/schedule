const Model = require("./schedule.model");
const moment = require("moment");

exports.getSchedule = (req, res) => {
  const dateInput = req.params.date;
  let date = moment(dateInput, "YYYY-MM-DD", true);
  if (date.isValid()) {
    date = date.format("YYYY-MM-DD");
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
  } else {
    return res.status(422).json({ error: "Invalid date" });
  }
};
