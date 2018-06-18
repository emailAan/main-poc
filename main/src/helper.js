import * as singleSpa from 'single-spa' // waiting for this to be merged: https://github.com/CanopyTax/single-spa/pull/156

export function hashPrefix (prefix) {
  return function (location) {
    console.log(`Moving to ${location}`)
    return location.hash.startsWith(`#${prefix}`)
  }
}

async function fetchModuleInfo (module, subModule) {
  console.log(`fetching module info for ${module}${subModule ? '/' + subModule : ''}`)
  const response = await window.fetch(`/api/${module}${subModule ? '/' + subModule : ''}`)
  return response.json()
}

export async function loadModule (name, module, subModule, globalEventDistributor, props = {}) {
  let moduleInfo = fetchModuleInfo(module, subModule)

  return loadApp(name, `/${name}`,
    moduleInfo.entry ? moduleInfo.entry : `/module/${module}/singleSpaEntry.js`,
    moduleInfo.stateless ? null : (moduleInfo.store ? moduleInfo.store : `/module/${module}/store.js`),
    globalEventDistributor, {...props, ...moduleInfo})
}

export async function loadApp (name, hash, appURL, storeURL, globalEventDistributor, props = {}) {
  let storeModule = {}
  let customProps = { globalEventDistributor: globalEventDistributor, ...props }

  // try to import the store module
  try {
    storeModule = storeURL ? await window.SystemJS.import(storeURL) : { storeInstance: null }
  } catch (e) {
    console.log(`Could not load store of app ${name}.`, e)
  }

  if (storeModule.storeInstance && globalEventDistributor) {
    // add a reference of the store to the customProps
    customProps.store = storeModule.storeInstance

    // register the store with the globalEventDistributor
    globalEventDistributor.registerStore(storeModule.storeInstance)
  }

  // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
  singleSpa.registerApplication(name, () => window.SystemJS.import(appURL), hashPrefix(hash), customProps)
}
