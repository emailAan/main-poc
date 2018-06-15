import 'zone.js'
import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadModule } from './helper'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'

async function init (nav) {
  const globalEventDistributor = new GlobalEventDistributor()

  await Promise.all(nav.map(async (e) => {
    if (e.module) {
      console.log(`Loading ${e.label}...`)
      await loadModule(e.label.replace(' ', ''), e.module, e.subModule, globalEventDistributor, {...e.params})
    }
    if (e.children) {
      init(e.children)
    }
  }))

  singleSpa.start()
}

window.fetch('/api/main/navigation')
  .then(function (response) {
    return response.json()
  })
  .then(function (nav) {
    init(nav)
    console.log('Done loading.')

    ReactDOM.render(<Navbar navData={nav} />, document.getElementById('main'))
  })
