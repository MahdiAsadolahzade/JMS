import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getUserById = (req, res) => {
  const token = req.cookies.accessToken;
  console.log(req.cookies.accessToken);
  if (!token) return res.status(401).json("Not Logged In !");
  console.log(token);
  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid !");
    const userId = userInfo.id;

    const q1 = "SELECT * FROM user WHERE ID = ?";
    db.query(q1, [userId], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      if (!data.length) {
        return res.status(404).json("User not found");
      }

      const { Password, ...user } = data[0];
      res.status(200).json(user);
    });
  });
};

export const updateUser = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;
    const { Name, Number, Address, Education } = req.body;
    const file = req.file;
    const Picture = file ? file.buffer : null;

    const q2 =
      "UPDATE user SET Name=?, Picture=?, Number=?, Address=?, Education=? WHERE ID=?";
    const values = [Name, Picture, Number, Address, Education, userId];

    db.query(q2, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json("User information updated successfully");
    });
  });
};
