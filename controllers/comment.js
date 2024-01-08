// controllers/comment.js
import { db } from "../connect.js";

// Middleware to get comments by Journal ID
export const getCommentsByJournalId = (req, res) => {
    const journalId = req.params.journalId;

    const query = "SELECT * FROM comment WHERE JournalID = ?";
    
    db.query(query, [journalId], (err, results) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(200).json(results);
    });
};

// Middleware to add a new comment
export const addComment = (req, res) => {
    const { UserID, JournalID, Content } = req.body;

    const query = "INSERT INTO comment (UserID, JournalID, Content) VALUES (?, ?, ?)";
    const values = [UserID, JournalID, Content];

    db.query(query, values, (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.status(201).json({ message: "Comment added successfully", commentId: result.insertId });
    });
};
