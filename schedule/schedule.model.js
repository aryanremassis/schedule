const connection = require("../config/db");

function executeQuery(query, params, callback) {
  // Use the connection
  connection.query(query, params, function (error, results, fields) {
    // And done with the connection.
    // Handle error after the release.
    if (error) {
      console.log(error);
      callback(true, {});
    } else callback(false, results);
    // Don't use the connection here, it has been returned to the pool.
  });
}

let schedule = {
  getSchedule: function (params, callback) {
    executeQuery(
      "select * from user_schedule where date=?",
      [params.date],
      callback
    );
  },
};

module.exports = schedule;
