import 'zone.js'
import * as singleSpa from 'single-spa'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadApp } from './helper'

async function init () {
  const globalEventDistributor = new GlobalEventDistributor()

  await loadApp('agenda', '/agenda', '/module/agenda/singleSpaEntry.js', '/module/agenda/store.js', globalEventDistributor)

  await loadApp('facturatie', '/facturatie', '/module/facturatie/singleSpaEntry.js', '/module/facturatie/store.js', globalEventDistributor)

  await loadApp('zorgplan', '/zorgplan', '/module/zorgplan/singleSpaEntry.js', '/module/zorgplan/store.js', globalEventDistributor)

  await loadApp('NOS', '/nos', '/module/url-loader/singleSpaEntry.js', null, null, {title: 'NOS', url: 'http://www.nos.nl'})

  singleSpa.start()
}

init()
