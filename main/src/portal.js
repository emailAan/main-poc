import 'zone.js'
import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp, loadModule } from './helper'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'

async function init (nav) {
  const globalEventDistributor = new GlobalEventDistributor()

  await loadModule('agenda', globalEventDistributor)

  await loadModule('facturatie', globalEventDistributor)

  await loadModule('zorgplan', globalEventDistributor)
  // await loadApp('agenda', '/agenda', '/module/agenda/singleSpaEntry.js', '/module/agenda/store.js', globalEventDistributor)

  // await loadApp('facturatie', '/facturatie', '/module/facturatie/singleSpaEntry.js', '/module/facturatie/store.js', globalEventDistributor)

  // await loadApp('zorgplan', '/zorgplan', '/module/zorgplan/singleSpaEntry.js', '/module/zorgplan/store.js', globalEventDistributor)

  await loadApp('NOS', '/nos', '/module/url-loader/singleSpaEntry.js', null, null, {title: 'NOS', url: 'http://www.nos.nl'})

  singleSpa.start()
}

init()
