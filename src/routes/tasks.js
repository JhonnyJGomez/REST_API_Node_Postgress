import { Router } from 'express';
import { createTask } from '../controllers/task.controller';
const router = Router();

// /api/tasks/
router.post('/', createTask);

export default router;
