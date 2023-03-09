import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/VisualsBootstrap/NavBar'
import Board from './components/Functional/Board';




function App() {
  return (
    <>
      <NavBar/>
      <Board/>
    </>
  )
}

export default App
