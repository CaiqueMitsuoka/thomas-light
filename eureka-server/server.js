const express = require('express')
const app = express()
const server = require('http').createServer(app)
const PORT = process.env.PORT || 8080
const router = require('./routes/router')(server)

app.set('view engine', 'ejs')
app.use('/', router)

server.listen(PORT, () => {
  console.log(`[EUREKA-SERVER] Listening on: ${PORT}`)
})
