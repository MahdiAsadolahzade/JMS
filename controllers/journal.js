// controllers/journal.js
import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getJournals = (req, res) => {
    const token = req.cookies.accessToken;
  
    if (!token) return res.status(401).json("Not Logged In!");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
  
      const userId = userInfo.id;
  
      const q1 = "SELECT * FROM journal WHERE Writers = ?";
      db.query(q1, [userId], (err, data) => {
        if (err) {
          return res.status(500).json(err);
        }
  
        res.status(200).json(data);
      });
    });
  };

export const addJournal = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");
    const userId = userInfo.id;

    const { Name, Description, Year } = req.body;
    const Picture = req.files['Picture'][0].buffer; 
    const PDF = req.files['PDF'][0].buffer; 

    const q2 = "INSERT INTO journal (Name, Description, Picture, PDF, Year, Writers) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [Name, Description, Picture, PDF, Year, userId];

    db.query(q2, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(201).json("Journal added successfully");
    });
  });
};

export const updateJournal = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;
    
    const journalId = req.params.id;
    
    const { Name, Description, Year } = req.body;
    const file = req.file;
   
    const Picture = req.files['Picture'] ? req.files['Picture'][0].buffer : null;
    const PDF = req.files['PDF'] ? req.files['PDF'][0].buffer : null; 

    const q3 = "UPDATE journal SET Name=?, Description=?, Picture=?, PDF=?, Year=? WHERE ID=? AND Writers=?";
    const values = [Name, Description, Picture, PDF, Year, journalId, userId];

    db.query(q3, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json("Journal updated successfully");
    });
  });
};


// controllers/journal.js
// ...

export const deleteJournal = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not Logged In!");

  jwt.verify(token, "secretkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const userId = userInfo.id;
    
    const journalId = req.params.id;

    const q4 = "DELETE FROM journal WHERE ID=? AND Writers=?";
    const values = [journalId, userId];

    db.query(q4, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }

      res.status(200).json("Journal deleted successfully");
    });
  });
};

// ...
