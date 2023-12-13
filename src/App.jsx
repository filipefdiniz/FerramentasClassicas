import { useState } from 'react'
import './App.css'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderComponent } from './Componentes/Header';
import { PrincipalSection } from './Componentes/section-principal';
import { CatalogoSection } from './Componentes/Catalogo';
import { FooterComponent } from './Componentes/Footer';
function App() {
  return (
    <>     
      <Router>
          <HeaderComponent />
          <Routes>
            <Route path='/home' element={<PrincipalSection />} />  
            <Route path='/catalogo' element={<CatalogoSection />} />          
          </Routes>  
          <FooterComponent />       
        </Router>
    </>
  )
}

export default App
