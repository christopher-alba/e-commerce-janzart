import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers/index'
// import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from './react-auth0-spa'
import config from './auth_config.json'
import history from './api/utils/history'
import thunkMiddleware from 'redux-thunk'
// Auth0 function to redirect user to right place after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleware)
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(

    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={config.audience}
    >
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Auth0Provider>,

    document.getElementById('app')
  )
})
