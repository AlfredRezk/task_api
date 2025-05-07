const router = require('express').Router()
const tasksCtrl = require('../controllers/tasks.ctrl')
const isAuth = require('../middleware/auth')

// Path /api/tasks
router.route('/tasks').get(tasksCtrl.getTasks).post(isAuth, tasksCtrl.addTask)

// Path /api/tasks/:taskId
router
  .route('/tasks/:taskId')
  .get(tasksCtrl.getSingleTask)
  .put(isAuth, tasksCtrl.updateTask)
  .patch(isAuth, tasksCtrl.updateTask)
  .delete(isAuth, tasksCtrl.deleteTask)
module.exports = router
