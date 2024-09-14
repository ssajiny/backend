import connection from "../config/db.js";

export const fetchUsers = (callback) => {
  connection.query("SELECT * FROM t_accnt", (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

export const fetchUserById = (id, callback) => {
  connection.query(
    "SELECT * FROM t_accnt WHERE accnt_sq = ?",
    [id],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    }
  );
};
