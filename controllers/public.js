
import { db } from '../connect.js';



// Endpoint to get the total number of users
export const userCount = (req, res) => {
  const q1 = 'SELECT COUNT(*) AS userCount FROM user';
  db.query(q1, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(data[0]);
  });
}

export const journalCount =(req, res) => {
  const q2 = 'SELECT COUNT(*) AS journalCount FROM journal';
  db.query(q2, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(data[0]);
  });
}

export const allJournals =(req, res) => {
  const q3 = 'SELECT * FROM journal';
  db.query(q3, (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.status(200).json(data);
  });
}


export const getJournalById = (req, res) => {
  const { id } = req.params;
  const q4 = 'SELECT * FROM journal WHERE id = ?';

  db.query(q4, [id], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    if (data.length === 0) {
      return res.status(404).json({ message: 'Journal not found' });
    }

    res.status(200).json(data[0]);
  });
};


export const searchJournals = (req, res) => {
  const { searchText } = req.query;
  const q5 = 'SELECT * FROM journal WHERE Name LIKE ?';

  db.query(q5, [`%${searchText}%`], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }

    res.status(200).json(data);
  });
};