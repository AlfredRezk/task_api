const { data } = require('../models/data')
const { v4: uuid } = require('uuid')
const ErrorResponse = require('../utils/ErrorResponse')
// ----------------------------------------
//  @URL    GET  /api/tasks
//  @DESC   Get all tasks
//  @ACCESS Public
// ----------------------------------------
exports.getTasks = (req, res) => {
  console.log(data[0]?.id.length)
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
exports.getSingleTask = (req, res) => {}

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
  const task = {
    id: uuid(),
    title,
    description,
    isCompleted: isCompleted || false,
    createdAt: new Date(),
    priority: priority || 'low',
  }
  // Add task to data array
  data.push(task)

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
exports.updateTask = (req, res) => {}

// ----------------------------------------
//  @URL    DELETE  /api/tasks/:taskId
//  @DESC   delete a single task by id
//  @ACCESS Private
// ----------------------------------------
exports.deleteTask = (req, res) => {}
