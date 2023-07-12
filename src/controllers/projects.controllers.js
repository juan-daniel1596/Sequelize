import { Projects } from '../models/Projects.js';
import { Task } from '../models/Task.js';


export const getProjects = async (req, res) => {

    try {
        const Projectos = await Projects.findAll()
        res.json(Projectos)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getProject = async (req, res) => {
     const { id } = req.params;
    try {
       
        const projects = await Projects.findOne({
            where: {
                id
            }
        })
        if (!projects)
            return res.status(404).json({ message: "El proyecto no existe" });
        res.json(projects)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}
export const createProject = async (req, res) => {

    const { name, priority, description } = req.body
    try {
        const newProject = await Projects.create({
            name,
            description,
            priority,

        });
        res.json(newProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }



}
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, priority, description } = req.body
        const proyectss = await Projects.findByPk(id)
        proyectss.name = name
        proyectss.priority = priority
        proyectss.description = description
        await proyectss.save()

        res.json(proyectss)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }


}
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await Projects.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getProyectTask = async(req,res) =>{
const {id} = req.params;
const task = await Task.findAll({
    where: {projectId : id}
    
            

});
res.json(task);

}

// const { id } = req.params;
//   try {
//     const tasks = await Task.findAll({
//       attributes: ["id", "projectId", "name", "done"],
//       where: { projectId: id },
//     });
//     res.json(tasks);
//   } catch (e) {
//     return res.status(500).json({ message: e.message });
//   }