import { useState } from 'react'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
{/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/> */}
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {

  return (
    <>
      <h1>NC News</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}


export default App
