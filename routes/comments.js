// routes/comments.js
import Express from 'express';
import { getCommentsByJournalId, addComment } from '../controllers/comment.js';

const router = Express.Router();

// Get comments by Journal ID
router.get('/:journalId', getCommentsByJournalId);

// Add a new comment
router.post('/add', addComment);

export default router;
