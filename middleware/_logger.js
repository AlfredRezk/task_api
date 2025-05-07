module.exports = (req, res, next) => {
  console.log(
    `[${new Date().toLocaleDateString(
      'en-US',
    )} : ${new Date().toLocaleTimeString('en-US')}]`.yellow,
    `${req.method}`.blue,
    `${req.url}`.green,
  )
  next()
}
