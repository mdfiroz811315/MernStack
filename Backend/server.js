const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
  res.send('Hello Firoz!')
})
app.post('/school', (req, res) => {
   // console.log(req.body);
    res.send('My School name is post')
  })
  app.put('/college', (req, res) => {
    res.send('My College name is put')
  })
  app.delete('/Hostel', (req, res) => {
    res.send('my hostel name is delete')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})