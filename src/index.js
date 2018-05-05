import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import history from './config/historyRouter'
import Store from './config/store'
import App from './modules/App'
import registerServiceWorker from './registerServiceWorker'

import './modules/shared/styles/index.css'

ReactDOM.render((
  <Provider store={Store.store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
),
document.getElementById('root'))
registerServiceWorker()
