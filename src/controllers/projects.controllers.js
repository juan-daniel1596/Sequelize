// import {Project} from '../models/Project.js'

export const getProjects = (req, res) => {
    res.send('getting projects');
}
export const createProject =  async (req, res) =>{
    res.send('creating project')
    // const {name,priority,description} = req.body
    // const newProject = await Project.create({
    //     name,
    //     description,
    //     priority
    // })
    // console.log(newProject)
    
}