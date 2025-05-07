const ErrorResponse = require('../utils/ErrorResponse')
const isAuth = (req, res, next) => {
  const token = req?.headers?.authorization?.split(' ')[1]

  if (!token) throw new ErrorResponse(401, 'Unauthorized')
  // User provided correct token
  next()
}

module.exports = isAuth
