import React, {Fragment} from 'react'

class Navbar extends React.Component {
  renderEntries (entries) {
    return (
      <Fragment>{
        entries.map(entry => (
          <Fragment>
            <a href={`#/${entry.module}`}>
              <li>{entry.label}</li>
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
    let {navData} = this.props
    console.log(navData)
    return (
      <ul>
        {this.renderEntries(navData)}
      </ul>
    )
  }
}

export default Navbar
