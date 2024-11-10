import { Router } from 'express';
import { registerDeveloper, getDeveloperStatus } from '../controllers/developer';
import { submitInquiry } from '../controllers/inquiry';
import { auth } from '../middleware/auth';

const router = Router();

// Developer routes
router.post('/developers/register', registerDeveloper);
router.get('/developers/:id/status', auth, getDeveloperStatus);

// Inquiry routes
router.post('/inquiries', submitInquiry);

export default router;