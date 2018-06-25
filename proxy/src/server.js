const express = require('express')
const proxy = require('http-proxy-middleware')
const helmet = require('helmet')
const app = express()

const DEFAULT_PORT = 8080
const port = process.env.PORT || DEFAULT_PORT

const MODULE_PREFIX = 'module'
const MODULE_PORT = 3000
const MAIN_PORT = 8080
const MAIN_HOSTNAME = 'main'

app.use(helmet())

app.use(express.static('public'))

var modules = proxy(`/${MODULE_PREFIX}`, {
  target: `http://${MODULE_PREFIX}:${MODULE_PORT}/`,
  pathRewrite:
    function (path, req) {
      var moduleHost = req.originalUrl.split('/')[2]
      // console.log(path.replace(`/module/${moduleHost}`, ''))
      return path.replace(`/${MODULE_PREFIX}/${moduleHost}`, '')
    },
  router: function (req) {
    var moduleHost = req.originalUrl.split('/')[2]
    // console.log(`http://${moduleHost}:${MODULE_PORT}`)
    return `http://${moduleHost}:${MODULE_PORT}`
  },
  changeOrigin: true
})

var main = proxy(['/'], {
  target: `http://${MAIN_HOSTNAME}:${MAIN_PORT}/`,
  pathRewrite:
    function (path, req) {
      return path.replace('/main/', '/')
    },
  router: {
    'main.localhost': `http://${MAIN_HOSTNAME}:${MAIN_PORT}/`,
    '/': `http://${MAIN_HOSTNAME}:${MAIN_PORT}/`
  },
  changeOrigin: true
})

var api = proxy('/api', {
  target: `http://api:${MODULE_PORT}/`,
  pathRewrite:
    function (path, req) {
      var moduleHost = req.originalUrl.split('/')[2]
      // console.log(path.replace(`/${moduleHost}`, ''))
      return path.replace(`/${moduleHost}`, '')
    },
  router: function (req) {
    var moduleHost = req.originalUrl.split('/')[2]
    // console.log(`http://${moduleHost}:${MODULE_PORT}`)
    return `http://${moduleHost}:${MODULE_PORT}`
  },
  changeOrigin: true
})

app.use(api)
app.use(modules)
app.use(main)

app.listen(port, () => console.log(`Main listening on port ${port}!`))
