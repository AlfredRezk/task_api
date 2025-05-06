const router = require('express').Router()
const tasksCtrl = require('../controllers/tasks.ctrl')

// Path /api/tasks
router.route('/tasks').get(tasksCtrl.getTasks).post(tasksCtrl.addTask)

// Path /api/tasks/:taskId
router
  .route('/tasks/:taskId')
  .get(tasksCtrl.getSingleTask)
  .put(tasksCtrl.updateTask)
  .patch(tasksCtrl.updateTask)
  .delete(tasksCtrl.deleteTask)
module.exports = router
