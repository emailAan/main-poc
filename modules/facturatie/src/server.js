const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3000
const MODULE = 'facturatie'

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api', (req, res) => res.status(200).send({
  name: MODULE,
  label: 'Facturatie',
  counter: `/api/${MODULE}/counter`,
  stateless: false
}))

app.get('/api/counter', function (req, res) {
  let counterData = { count: 3 }
  res.status(200).send(counterData)
})

app.listen(PORT, () => console.log(`${MODULE} module listening on port ${PORT}!`))
