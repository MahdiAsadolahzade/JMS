// middleware/auth.js
import jwt from 'jsonwebtoken';
import { db } from '../connect.js';

export const authenticateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json("Access token is required");
  }

  jwt.verify(accessToken, 'secretkey', (err, user) => {
    if (err) {
      return res.status(403).json("Invalid token");
    }

    req.user = user;
    next();
  });
};
