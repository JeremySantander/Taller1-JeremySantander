import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import MedicionNavbar from './components/MedicionNavbar.jsx';
import HomeContainer from './containers/HomeContainer.jsx';
import LecturaFormContainer from './containers/LecturaFormContainer.jsx';
import MedicionesViewContainer from './containers/MedicionesViewContainer.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <MedicionNavbar/>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/lectura-form" element={<LecturaFormContainer />} />
            <Route path="/mediciones-view" element={<MedicionesViewContainer />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
