const express = require('express')
const proxy = require('http-proxy-middleware')
const app = express()

const DEFAULT_PORT = 8080
const port = process.env.PORT || DEFAULT_PORT

console.log(process.env.PORT)

app.use(express.static('public'))

var modules = proxy('/module', {
  target: 'http://module:3000/',
  pathRewrite:
    function (path, req) {
      var moduleHost = req.originalUrl.split('/')[2]
      console.log(path.replace(`/module/${moduleHost}`, ''))
      return path.replace(`/module/${moduleHost}`, '')
    },
  router: function (req) {
    var moduleHost = req.originalUrl.split('/')[2]
    console.log(`http://${moduleHost}:3000`)
    return `http://${moduleHost}:3000`
  },
  changeOrigin: true
})

var main = proxy(['/'], {
  target: 'http://main:3000/',
  pathRewrite:
    function (path, req) {
      return path.replace('/main/', '/')
    },
  router: {
    'main.localhost': 'http://main:3000',
    '/': 'http://main:3000',
    'api.localhost': 'http://localhost:3000/api'
  },
  changeOrigin: true
})

var api = proxy('/api', {
  target: 'http://api:3000/',
  pathRewrite:
    function (path, req) {
      var moduleHost = req.originalUrl.split('/')[2]
      console.log(path.replace(`/${moduleHost}`, ''))
      return path.replace(`/${moduleHost}`, '')
    },
  router: function (req) {
    var moduleHost = req.originalUrl.split('/')[2]
    console.log(`http://${moduleHost}:3000`)
    return `http://${moduleHost}:3000`
  },
  changeOrigin: true
})

app.use(api)
app.use(modules)
app.use(main)
app.listen(port, () => console.log(`Main listening on port ${port}!`))
