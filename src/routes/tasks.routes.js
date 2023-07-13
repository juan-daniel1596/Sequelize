import { Router } from 'express';

import { createTask, deleteTask, getTask, getTasks, getTasksProyect, updateTask } from '../controllers/tasks.controllers.js'
const router = Router()
router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id',deleteTask);
router.get('/tasks/:id', getTask);
router.get('/tasks/:id/projects',getTasksProyect)




export default router;