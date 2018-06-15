import React, {Fragment} from 'react'

async function fetchModuleInfo (module, subModule) {
  if (!module) {
    return
  }

  console.log(`fetching module info for ${module}${subModule ? '/' + subModule : ''}`)
  const response = await window.fetch(`/api/${module}${subModule ? '/' + subModule : ''}`)
  return response.json()
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
    this.state = {navData: props.navData, tiles: props.navData}
  }

  findAndUpdateItem (items, item, counter) {
    let updatedItems = items.map((e) => {
      let updatedItem = (JSON.stringify(item) === JSON.stringify(e)) ? {...e, counter: counter} : {...e}

      if (e.children) {
        updatedItem.children = this.findAndUpdateItem(e.children, item, counter)
      }

      return updatedItem
    })
    return updatedItems
  }

  updateNavItemWithCounter (item, counter) {
    let navData = this.findAndUpdateItem(this.state.navData, item, counter)

    this.setState({...this.state, navData: navData, timestamp: new Date()})
  }

  componentDidMount () {
    fetchCounters(this.state.navData, this)
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

  setTiles (children) {
    this.setState({...this.state, tiles: children})
  }

  render () {
    let {navData, tiles} = this.state

    return (
      <Fragment>
        <div className='navbar' >
          <ul>
            <a href={`#`} onClick={this.setTiles.bind(this, navData)}>
              <li>
                <span>Home</span>
              </li>
            </a>
            {this.renderEntries(navData)}
          </ul>
        </div>
        <div style={{position: 'absolute', top: '50px'}}>
          {
            tiles.map((e) => {
              return (
                <div className='tile tileSize1x1 x224 x228 txtWhite'>
                  <div style={{top: '0px', left: '0px', bottom: '0px', right: '0px'}}>
                    <span style={{position: 'absolute', width: 'auto', height: 'auto', top: '0px', left: '0px', bottom: '0px', right: '0px'}}>
                      <div>
                        <span className='fontCounterTile counterOutput'>{e.counter}</span>
                        <img className='wachten' alt='wachten' class='fontCounterTile' style={{display: 'none'}} src='/UserPortal/resources/images/wait.svg' />
                        <div>
                          <span className='fontCounterDescSquare'>{e.label}</span>
                        </div>
                      </div>
                    </span>
                    {e.module
                      ? <a className='tileLink tileSize1x1' href={`#/${e.label.replace(' ', '')}`}>
                        <span />
                      </a>
                      : <a className='tileLink tileSize1x1' onClick={this.setTiles.bind(this, e.children)}>
                        <span />
                      </a>
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </Fragment>
    )
  }
}

export default Navbar
