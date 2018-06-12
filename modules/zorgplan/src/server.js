const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/', function (req, res) {
  res.status(200).send('Zorgplan API')
})

app.get('/api/counter', function (req, res) {
  let counterData = { count: 17 }
  res.status(200).send(counterData)
})

app.listen(3000, () => console.log('Zorgplan module listening on port 3000!'))
