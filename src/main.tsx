import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import theme from '@/theme/light'

import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
