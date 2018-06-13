import React, {Fragment} from 'react'

async function fetchModuleInfo (module, subModule) {
  console.log(`fetching module info for ${module}${subModule ? '/' + subModule : ''}`)
  const response = await window.fetch(`/api/${module}${subModule ? '/' + subModule : ''}`)
  return await response.json()
}

async function fetchCounters (navData) {
  await Promise.all(navData.map(async (e) => {
    let moduleInfo = fetchModuleInfo(e.module, e.subModule)

    if (moduleInfo.counter) {
      console.log(`Loading ${moduleInfo.counter}...`)
      await window.fetch(moduleInfo.counter)
    }
    if (e.children) {
      e.counter = fetchCounters(e.children).count
    }
  }))
}

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {navData: props.navData}
    console.log(this.state)
  }

  componentDidMount () {
    var navData = {...this.state}
    console.log(this.state)

    fetchCounters(navData)

    this.setState({...this.state, navData: navData})
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
