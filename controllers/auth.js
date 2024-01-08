import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  const q1 = "SELECT * FROM user WHERE UserName = ?";
  db.query(q1, [req.body.UserName], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (data.length) {
      return res.status(409).json("User already exists !");
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPass = bcrypt.hashSync(req.body.Password, salt);

    const q2 = "INSERT INTO user (`UserName`, `Email`, `Password`) VALUES (?)";

    const values = [req.body.UserName, req.body.Email, hashedPass];

    db.query(q2, [values], (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).json("User has been created successfully");
    });
  });
};

// Login endpoint
export const login = (req, res) => {
  const q3 = "SELECT * FROM user WHERE UserName = ?";

  db.query(q3, [req.body.UserName], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length === 0) return res.status(404).json("User not found!");

    const passIsTrue = bcrypt.compareSync(req.body.Password, data[0].Password);

    if (!passIsTrue) return res.status(400).json("Wrong password or username!");

    const token = jwt.sign({ id: data[0].ID }, "secretkey");
    const { Password, ...others } = data[0];
    console.log(data[0]);
    res
      .cookie("accessToken", token, { httpOnly: true })
      .status(200)
      .json({ ...others });
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      secure: true,
      sameSite: "none",
    })
    .status(200)
    .json("User has been logged Out !");
};
