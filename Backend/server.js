const express = require('express')
const app = express()
const bodyParser = require("body-parser"); // to recieve JSON data from frontend
const cors = require("cors"); // for cross origin data communication
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello Firoz!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})