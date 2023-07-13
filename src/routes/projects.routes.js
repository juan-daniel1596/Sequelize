import { Router } from 'express';

import { createProject, deleteProject, getProyectTask, getProject, getProjects, updateProject, deleteProjectsTasks, createProyectsTasks} from '../controllers/projects.controllers.js'


const router = Router()


router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:id", updateProject)
router.delete("/projects/:id", deleteProject)
router.get("/projects/:id", getProject)

//relacion de tablas
router.get("/projects/:id/tasks", getProyectTask)
//elimnar projectos con sus tareas
router.delete("/projects/:id/tasks", deleteProjectsTasks)
//creating Proyects and tasks
router.delete("/projects/tasks", createProyectsTasks)

export default router;