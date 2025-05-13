import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider as StateProvider } from 'react-redux'
import 'app/index.css'
import { App } from 'app/App.tsx'
import { store } from 'app/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StateProvider store={store}>
      <App />
    </StateProvider>
  </StrictMode>,
)
