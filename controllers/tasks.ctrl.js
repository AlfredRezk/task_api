const { data } = require('../models/data')
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
exports.getSingleTask = (req, res) => {}

// ----------------------------------------
//  @URL    POST  /api/tasks/
//  @DESC   create a new task
//  @ACCESS Private
// ----------------------------------------
exports.addTask = (req, res) => {}

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
