// controllers/like.js
import { db } from "../connect.js";

// Middleware to get likes by Journal ID
export const getLikesByJournalId = (req, res) => {
    const journalId = req.params.journalId;

    const query = "SELECT * FROM `like` WHERE JournalID = ?";
    
    db.query(query, [journalId], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);
    });
};

// Middleware to add a new like
export const addLike = (req, res) => {
    const { UserID, JournalID } = req.body;

    const query = "INSERT INTO `like` (UserID, JournalID) VALUES (?, ?)";
    const values = [UserID, JournalID];

    db.query(query, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({ message: "Like added successfully", likeId: result.insertId });
    });
};
