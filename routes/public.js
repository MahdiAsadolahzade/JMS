// routes/public.js
import Express from 'express';
import { db } from '../connect.js';
import { userCount ,journalCount ,allJournals , getJournalById, searchJournals } from '../controllers/public.js';

const router = Express.Router();

// Endpoint to get the total number of users
router.get('/user-count',userCount );

// Endpoint to get the total number of journals
router.get('/journal-count',journalCount );

// Endpoint to get the list of all journals
router.get('/all-journals', allJournals );

router.get('/journal/:id', getJournalById );

router.get('/search-journals', searchJournals );

export default router;
