import { useState } from 'react'
import './App.css'
import { HeaderComponent } from './Componentes/Header';
import { PrincipalSection } from './Componentes/section-principal';
function App() {
  return (
    <>
      <HeaderComponent />
      <PrincipalSection />
    </>
  )
}

export default App
