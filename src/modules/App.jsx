import React, { Component } from 'react'
import { Div } from 'glamorous'

import Routes from './Routes'
import './shared/styles/App.css'

import styles from './shared/styles/App'

class App extends Component {
  render () {
    return (
      <Div css={styles.app}>
        <Routes />
      </Div>
    )
  }
}

export default App
