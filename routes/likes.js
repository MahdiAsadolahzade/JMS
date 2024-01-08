// routes/likes.js
import Express from 'express';
import { getLikesByJournalId, addLike } from '../controllers/like.js';

const router = Express.Router();

// Get likes by Journal ID
router.get('/:journalId', getLikesByJournalId);

// Add a new like
router.post('/add', addLike);

export default router;
