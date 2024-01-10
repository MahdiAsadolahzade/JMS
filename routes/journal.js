// routes/journal.js
import Express from 'express';
import multer from 'multer';
import { getJournals, addJournal, updateJournal ,deleteJournal} from '../controllers/journal.js';

const router = Express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage  , limits: { fileSize: 1024 * 1024 * 50 }});

// Endpoint to get all journals
router.get('/find', getJournals);

// Endpoint to add a new journal
router.post('/addjournal', upload.fields([{ name: 'Picture', maxCount: 1 }, { name: 'PDF', maxCount: 1 }]), addJournal);

// Endpoint to update a journal
router.put('/update/:id', upload.fields([{ name: 'Picture', maxCount: 1 }, { name: 'PDF', maxCount: 1 }]), updateJournal);

router.delete('/delete/:id', deleteJournal);
export default router;
