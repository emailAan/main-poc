
import React from 'react'

class Iframe extends React.Component {
  render () {
    return (
      <iframe
        {...this.props}
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        className='content'
      />
    )
  }
}

export default class Root extends React.Component {
  componentDidCatch (error, info) {
    console.log(error, info)
  }

  render () {
    let {url, title} = this.props.customProps

    return <Iframe title={title} src={url} />
  }
}
