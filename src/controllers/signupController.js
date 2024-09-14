import { checkDB } from "../models/signupModel.js";

export function validateUnique(req, res) {
  const { email, phone } = req.body;

  checkDB({ email, phone }, (err, result) => {
    if (err) {
      res.status(500).json({ message: "Server Error" });
    } else {
      res.json({ message: result });
    }
  });
}
