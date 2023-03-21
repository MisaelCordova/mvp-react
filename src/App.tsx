import { BrowserRouter } from 'react-router-dom'
import './App.css'

import Card from './components/Card'
import { Footer } from './components/Footer'
import { AppRouter } from './Routes'

function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
    
  )
}

export default App
