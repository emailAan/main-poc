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
      return path.replace(`/module/${moduleHost}`, '')
    },
  router: function (req) {
    var moduleHost = req.originalUrl.split('/')[2]
    console.log(`http://${moduleHost}:3000`)
    return `http://${moduleHost}:3000`
  },
  changeOrigin: true
})

var main = proxy(['/', '/main'], {
  target: 'http://main:3000/',
  pathRewrite:
    function (path, req) {
      return path.replace('/main', '')
    },
  router: {
    'main.localhost': 'http://main:3000',
    '/main': 'http://main:3000'
  },
  changeOrigin: true
})

app.use(modules)
app.use(main)
app.listen(port, () => console.log(`Main listening on port ${port}!`))
