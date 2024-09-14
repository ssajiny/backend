import connection from "../config/db.js";

export const checkDB = ({ email, phone }, callback) => {
  connection.query(
    `SELECT
      (SELECT COUNT(*) FROM users WHERE email = ?) AS emailExists,
      (SELECT COUNT(*) FROM users WHERE phone = ?) AS phoneExists      
    `,
    [email, phone],
    (err, results) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, results[0]);
      }
    }
  );
};
