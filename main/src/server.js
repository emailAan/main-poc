const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/', function (req, res) {
  res.status(200).send('Main API')
})

app.get('/api/navigation', function (req, res) {
  let nav = [
    {
      label: 'Dossier',
      children: [
        {
          label: 'Agenda',
          module: '/api/agenda'
        },
        {
          label: 'Zorplan',
          module: '/api/zorgplan'
        }
      ]
    },
    {
      label: 'Facturatie',
      module: '/api/facturatie'
    }
  ]
  res.status(200).send(nav)
})

app.listen(3000, () => console.log('Main app listening on port 3000!'))
