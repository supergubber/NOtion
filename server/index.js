const express = require('express')
const app = express()
const { connect } = require('./config/database')
require('dotenv').config()

app.use(express.json())

let PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`server started http//:localhost:${PORT}`)
  connect()
})
app.get('/', (req, res) => {
  res.send('server started successfully')
})
