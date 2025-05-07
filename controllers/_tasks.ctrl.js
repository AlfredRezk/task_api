const { data, Task } = require('../models/data')
const { v4: uuid } = require('uuid')
const ErrorResponse = require('../utils/ErrorResponse')
// ----------------------------------------
//  @URL    GET  /api/tasks
//  @DESC   Get all tasks
//  @ACCESS Public
// ----------------------------------------
exports.getTasks = (req, res) => {
  res.status(200).json({
    success: true,
    data,
    count: data.length,
  })
}

// ----------------------------------------
//  @URL    GET  /api/tasks/:taskId
//  @DESC   Get a single task by id
//  @ACCESS Public
// ----------------------------------------
exports.getSingleTask = async (req, res) => {
  const taskId = req.params.taskId

  // validate the id
  if (taskId.length !== 36) throw new ErrorResponse(400, 'Invalid task id')

  const task = data.find((task) => task.id === taskId)
  if (!task) throw new ErrorResponse(404, `Task not found with id ${taskId}`)

  // Sending a success response
  res.status(200).json({
    success: true,
    data: task,
  })
}

// ----------------------------------------
//  @URL    POST  /api/tasks/
//  @DESC   create a new task
//  @ACCESS Private
// ----------------------------------------
exports.addTask = async (req, res) => {
  // Receive json data title and description from req.body
  const { title, description, isCompleted, priority } = req.body
  // Check if title and description are provided
  if (!title) throw new ErrorResponse(400, 'Title is required')
  if (!description) throw new ErrorResponse(400, 'Description is required')

  // Create a task Object
  // const task = {
  //   id: uuid(),
  //   title,
  //   description,
  //   isCompleted: isCompleted || false,
  //   createdAt: new Date(),
  //   priority: priority || 'low',
  // }

  const task = new Task(title, description)
  // Add task to data array
  // data.push(task)
  task.add()

  // Send success response
  res.status(201).json({
    success: true,
    data,
    count: data.length,
  })
}

// ----------------------------------------
//  @URL    PUT or PATCH  /api/tasks/:taskId
//  @DESC   update a single task by id
//  @ACCESS Private
// ----------------------------------------
exports.updateTask = async (req, res) => {
  // const taskId = req.params.taskId
  // const { title, description, isCompleted, priority } = req.body

  Task.updateById(req.params.taskId, req.body)
  // validate the id
  // if (taskId.length !== 36) throw new ErrorResponse(400, 'Invalid task id')

  // Find task index in data array
  // const taskIndex = data.findIndex((task) => task.id === taskId)
  // if (taskIndex === -1)
  //   throw new ErrorResponse(404, `Task not found with id ${taskId}`)

  //update the task data
  // data[taskIndex].title = title ?? data[taskIndex].title
  // data[taskIndex].description = description ?? data[taskIndex].description
  // data[taskIndex].isCompleted = isCompleted ?? data[taskIndex].isCompleted
  // data[taskIndex].priority = priority ?? data[taskIndex].priority

  // Sending a success response
  res.status(200).json({
    success: true,
    data: data[taskIndex],
    message: 'Task updated successfully',
  })
}

// ----------------------------------------
//  @URL    DELETE  /api/tasks/:taskId
//  @DESC   delete a single task by id
//  @ACCESS Private
// ----------------------------------------
exports.deleteTask = async (req, res) => {
  const taskId = req.params.taskId

  // validate the id
  // if (taskId.length !== 36) throw new ErrorResponse(400, 'Invalid task id')

  // Find task index in data array
  // const taskIndex = data.findIndex((task) => task.id === taskId)
  // if (taskIndex === -1)
  //   throw new ErrorResponse(404, `Task not found with id ${taskId}`)

  // Delete task from data array
  // data.splice(taskIndex, 1)
  Task.deleteById(taskId)
  // Sending a success response
  res.status(200).json({
    success: true,
    data: {},
    count: data.length,
    message: 'Task deleted successfully',
  })
}
