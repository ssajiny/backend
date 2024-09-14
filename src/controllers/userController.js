import { fetchUsers, fetchUserById } from "../models/userModel.js";

export function getUsers(req, res) {
  fetchUsers((err, users) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving users" });
    } else {
      res.json(users);
    }
  });
}

export function getUserById(req, res) {
  const userId = req.params.id;
  fetchUserById(userId, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Error retrieving user" });
    } else if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.json(user);
    }
  });
}
