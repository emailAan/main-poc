
import React from 'react'

class Iframe extends React.Component {
  render () {
    const iframeStyle = {
      width: 'calc(100% - 10px)',
      height: 'calc(100% - 100px)',
      border: '0',
      position: 'absolute'
    }

    return (
      <iframe
        {...this.props}
        frameBorder={'0'}
        width={'100%'}
        height={'100%'}
        style={iframeStyle}
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
    console.log(url, title)
    return (
      <div style={{marginTop: 100}} >
        <Iframe title={title} src={url} />
      </div>
    )
  }
}
