import React from 'react'
import {Provider, connect} from 'react-redux'
import Counter from './counter'
import reactLogo from '../assets/react-logo.png'

export default class Root extends React.Component {
    state = {};

    componentDidCatch (error, info) {
      console.log(error, info)
    }

    setStore (store) {
      this.setState({...this.state, store: store})
    }

    setGlobalEventDistributor (globalEventDistributor) {
      this.setState({...this.state, globalEventDistributor: globalEventDistributor})
    }

    render () {
      let ret = <div />
      let {globalEventDistributor, store} = this.props.customProps

      if (!this.state.globalEventDistributor) {
        this.setStore(store)
        this.setGlobalEventDistributor(globalEventDistributor)
      }

      if (store && globalEventDistributor) {
        ret =
          <Provider store={store}>
            <div style={{marginTop: 100}}>
              <img src={reactLogo} style={{width: 100}} /> <br />
                        Facturatie
              <Counter globalEventDistributor={globalEventDistributor} />
            </div>
          </Provider>
      }

      return ret
    }
}
