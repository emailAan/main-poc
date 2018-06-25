import 'zone.js'
import * as singleSpa from 'single-spa'
import { Parcel } from 'single-spa-react/parcel'
import { GlobalEventDistributor } from './globalEventDistributor'
import { loadModule } from './helper'
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './Navbar'

async function init (nav) {
  const globalEventDistributor = new GlobalEventDistributor()

  await Promise.all(nav.map(async (e) => {
    if (e.module && !singleSpa.getAppNames().includes(e.label)) {
      // console.log(`Loading ${e.label}...`)
      loadModule(e.label.replace(' ', ''), e.module, e.subModule, globalEventDistributor, { ...e.params })
    }
    if (e.children) {
      init(e.children)
    }
  }))

  singleSpa.start()
}

async function getAgendaParcel () {
  ReactDOM.render(
    <div>
      Lets render a parcel with jsx!
      <Parcel
        config={() => window.SystemJS.import('/module/agenda/singleSpaEntry.js')}// {agendaSpa.reactLifecyclesParcel}
        wrapWith='div'
        appendTo={document.body}
        foo='bar'
      />
    </div>
    , document.getElementById('app1'))
}

getAgendaParcel()

function render (nav) {
  ReactDOM.render(<Navbar navData={nav} />, document.getElementById('main'))

  init(nav)
  // console.log('Done loading.')
}

window.fetch('/api/main/navigation')
  .then(response => response.json())
  .then(nav => render(nav))
