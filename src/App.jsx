import { useState } from 'react'
import './App.css'
// import "bootstrap/dist/css/bootstrap.min.css";
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
