const express = require('express')
const router = require('./router')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
  }

  app.use(myLogger)

app.use(router)
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
  })