import React, {Fragment} from 'react'

async function fetchModuleInfo (module, subModule) {
  if (!module) {
    return
  }

  console.log(`fetching module info for ${module}${subModule ? '/' + subModule : ''}`)
  const response = await window.fetch(`/api/${module}${subModule ? '/' + subModule : ''}`)
  return await response.json()
}

async function fetchCounter (e, navbarInstance) {
  let moduleInfo = await fetchModuleInfo(e.module, e.subModule)

  if (!moduleInfo || !moduleInfo.counter) {
    return
  }

  console.log(`Loading ${moduleInfo.counter}...`)
  const response = await window.fetch(moduleInfo.counter)

  let counter = await response.json()
  navbarInstance.updateNavItemWithCounter(e, counter.count)
}

async function fetchCounters (navData, navbarInstance) {
  await Promise.all(navData.map(async (e) => {
    if (e.children) {
      await fetchCounters(e.children, navbarInstance)
    }
    return fetchCounter(e, navbarInstance)
  }))
}

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {navData: props.navData}
  }

  updateNavItemWithCounter (item, counter) {
    let navData = [...this.state.navData]

    navData.map((e) => {
      if (JSON.stringify(item) === JSON.stringify(e)) {
        console.log('nooit hier?')
        return {...e, counter}
      } else {
        console.log('altijd daar!')
        return e
      }
    })

    this.setState({...this.state, navData: navData})
  }

  componentDidMount () {
    var navData = [...this.state.navData]

    fetchCounters(navData, this)
    // console.log('Done fetching counters.')

    // this.setState({...this.state, navData: navData})
  }

  renderEntries (entries) {
    return (
      <Fragment>{
        entries.map(entry => (
          <Fragment>
            <a href={`#/${entry.label.replace(' ', '')}`}>
              <li>
                <span>{entry.label}</span>
                <span className='counter' >{entry.counter}</span>
              </li>
            </a>
            {
              entry.children ? this.renderEntries(entry.children) : null
            }
          </Fragment>
        ))
      }
      </Fragment>
    )
  }

  render () {
    let {navData} = this.state
    return (
      <ul>
        {this.renderEntries(navData)}
      </ul>
    )
  }
}

export default Navbar
