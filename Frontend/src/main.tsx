import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './Store/Store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>,
)
