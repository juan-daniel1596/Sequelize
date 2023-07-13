
import { Task } from './../models/Task.js';
import {Projects} from '../models/Projects.js'

export const getTasks = async (req, res) => {
    try {
        const task = await Task.findAll()
        res.json(task)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

};

export const createTask = async (req, res) => {
    const { name, done, projectId } = req.body
    try {
        const newTask = await Task.create({
            name,
            done,
            projectId,
            
        })
        res.json(newTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getTask = async (req, res) => {
    const {id} = req.params
    try {

        const task = await Task.findOne({
            where: {id}

        })
        if (!task)
            return res.status(404).json({ message: "El proyecto no existe" });
        res.json(task)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOne({
            where: {id}
        })
        task.set (req.body)
        await task.save();
        return res.json(task)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.destroy({
            where: {
                id,
            },
        });
        res.sendStatus(204);

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
export const getTasksProyect = async (req, res) => {
    const { id } = req.params;
    try {
        const task = await Task.findByPk({
                attributes:[Projects],
            where: { projectId: id }
        });
    
        res.json(task);
    
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
    
}