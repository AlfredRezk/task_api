const { v4: uuid } = require('uuid')

exports.data = [
  //   {
  //     id: 1,
  //     title: 'Task 1',
  //     description: 'Task 1 description',
  //     isCompleted: false,
  //     createdAt: new Date(),
  //     priority: 'low',
  //   },
]

class Task {
  constructor(title, description) {
    this.id = uuid()
    this.title = title
    this.description = description
    this.isCompleted = false
    this.createdAt = new Date()
    this.priority = 'low'
  }
}
