const express = require('express')
const app = express()
const port = 3001

// route handler on get method
// "/" is the route below
// res is reponse 
// req is for the request by the user
app.get('/', (req, res) => {
  res.send('Hlo My man')
})

// "/practise" is the route below
app.get('/practise', (req, res) => {
  res.send('parctise port')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
