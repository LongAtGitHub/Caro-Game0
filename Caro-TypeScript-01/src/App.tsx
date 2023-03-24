import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/VisualsBootstrap/NavBar'
import Board from './components/Functional/Board';
import WinnerScreen from './components/VisualsBootstrap/WinnerScreen';




function App() {
  return (
    <>
      <NavBar/>
      <Board/>
      {/* <div style={{display:"flex", justifyContent: "center"}}>
      <WinnerScreen/> */}
      {/* </div> */}
    </>
  )
}

export default App
