import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './store/store'
import { SettingsProvider } from './context/SettingsContext'

import PokemonStab from './PokemonStab'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SettingsProvider>
      <Provider store={store}>
        <PokemonStab />
      </Provider>
    </SettingsProvider>
  </React.StrictMode>
)
