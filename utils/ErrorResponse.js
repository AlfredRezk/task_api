class ErrorResponse extends Error {
  constructor(errCode, message) {
    super(message)
    this.errCode = errCode
  }
}

module.exports = ErrorResponse
