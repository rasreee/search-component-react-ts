import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { StoreContext } from './contexts/StoreContext'
import Store from './Store';

const store = new Store();

ReactDOM.render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
