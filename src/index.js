import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.css'
import "./styles/index.css"

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, createLogger())))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
