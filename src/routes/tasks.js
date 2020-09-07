import { Router } from 'express'
const router = Router();

import { createTask, getTasks, deleteTask, updateTask, getOneTask, getTasksbyProject } from '../controllers/task.controller'

// Routes
router.post('/', createTask);
router.get('/', getTasks);
router.get('/:id', getOneTask);
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/project/:projectid', getTasksbyProject);
export default router;