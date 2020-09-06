import { Router } from 'express'
const router = Router();

import { createTask } from '../controllers/task.controller'

// Routes
router.post('/', createTask);
export default router;