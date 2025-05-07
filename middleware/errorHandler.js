module.exports = (error, req, res, next) => {
  res
    .status(error.errCode || 500)
    .json({ success: false, error: true, message: error.message })
}
