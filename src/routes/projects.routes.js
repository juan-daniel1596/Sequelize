import { Router } from 'express'
import { getProjects, createProject } from '../controllers/projects.controllers.js'


const router = Router()

router.get("/", (req, res)=> {
    console.log('hiii 1')
    res.send({msg: 'hiiiiii world'})
}  )

router.get("/hi", (req, res)=> {
    console.log('hiii')
    res.send({msg: 'hiiiiii'})
}  )

router.get("/projects", getProjects)
router.post("/projects", createProject)
router.put("/projects/:id")
router.delete("/projects/:id")
router.get("/projects/:id")

export default router;