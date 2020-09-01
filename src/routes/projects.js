import { Router } from 'express';
import { createProject, getProjects } from '../controllers/project.controller';
const router = Router();

// /api/projects/
router.post('/', createProject)
router.get('/', getProjects);

// api/projects/projectID
//router.get('/',)

export default router;