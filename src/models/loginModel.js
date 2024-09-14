import connection from "../config/db.js";

export const login = ({ id, pw }, callback) => {
    connection.query(
        "SELECT accnt_sq, accnt_id, sys_role_ccd FROM t_accnt WHERE accnt_id = ? and accnt_pw = ?",
        [id, pw],
        (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result[0]);
            }
        }
    )
}

