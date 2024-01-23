import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import BookAnimation from './components/BookAnimation/BookAnimation';
import About from './components/AboutLibrary/About'
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='homeContainer'>
          <div className='aboutUserGuideCnt'>
          <About/>
          </div>
          <div className='ImageContainer'>
             <BookAnimation/>
          </div>
        </div>
      </div>
     
    </>

  )
}

export default App

