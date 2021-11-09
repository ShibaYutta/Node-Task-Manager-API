const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('GET all tasks')
}


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
        console.log('createTask: PASSOU UE')
    } catch (error) {
        res.status(500).json({msg:error})
        console.log('createTask: N PASSOU')
    }

}
const getTask = (req, res) => {
    res.json({id:req.params.id})
}
const updateTask = (req, res) => {
    res.send('update task')
}
const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks, 
    createTask,
    getTask,
    updateTask, 
    deleteTask
}