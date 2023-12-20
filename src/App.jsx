import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './Componentes/Header';
import { PrincipalSection } from './Componentes/section-principal';
import { FooterComponent } from './Componentes/Footer';
function App() {
  return (
    <>     
      <Router>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<PrincipalSection />} />        
          </Routes>  
          <FooterComponent />       
        </Router>
    </>
  )
}

export default App
