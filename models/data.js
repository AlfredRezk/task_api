const { v4: uuid } = require('uuid')
const ErrorResponse = require('../utils/ErrorResponse')

const data = []

function checkId(id) {
  if (id.length !== 36) throw new ErrorResponse(400, 'Invalid task id')
  if (!id) throw new ErrorResponse(400, 'Please provide task id')
}

class Task {
  constructor(title, description, isCompleted = false, priority = 'low') {
    this.id = uuid()
    this.title = title
    this.description = description
    this.isCompleted = isCompleted
    this.createdAt = new Date()
    this.priority = priority
  }
  add() {
    data.push(this)
  }

  static findById(id) {
    checkId(id)
    const task = data.find((task) => task.id === id)
    if (!task) throw new ErrorResponse(404, `Task not found with id ${id}`)
    return task
  }

  static deleteById(id) {
    checkId(id)
    const taskIndex = data.findIndex((task) => task.id === id)
    if (taskIndex === -1)
      throw new ErrorResponse(404, `Task not found with id ${id}`)
    data.splice(taskIndex, 1)
  }

  static updateById(id, newData) {
    checkId(id)
    const taskIndex = data.findIndex((task) => task.id === id)
    if (taskIndex === -1)
      throw new ErrorResponse(404, `Task not found with id ${id}`)
    data[taskIndex].title = newData.title ?? data[taskIndex].title
    data[taskIndex].description =
      newData.description ?? data[taskIndex].description
    data[taskIndex].isCompleted =
      newData.isCompleted ?? data[taskIndex].isCompleted
    data[taskIndex].priority = newData.priority ?? data[taskIndex].priority
    return data[taskIndex]
  }
}

module.exports = { data, Task }
