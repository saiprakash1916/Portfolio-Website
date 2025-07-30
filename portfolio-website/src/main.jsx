import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header.jsx'
import HeroSection from './HeroSection.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <HeroSection />
  </StrictMode>,
)
