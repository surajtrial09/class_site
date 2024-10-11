import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Components/Footer/Footer.jsx';
import Uppernav from './Components/UpperNavbar/Uppernav.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Uppernav />
      <Navbar />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
