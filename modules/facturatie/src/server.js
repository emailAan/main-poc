const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/', function (req, res) {
  res.status(200).send('Facturatie API')
})

app.get('/api/counter', function (req, res) {
  let counterData = { count: 5 }
  res.status(200).send(counterData)
})

app.listen(3000, () => console.log('Facturatie module listening on port 3000!'))
