import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import UserGuide from './components/UserGuide/UserGuide';
import BookAnimation from './components/BookAnimation/BookAnimation';
const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='homeContainer'>
          <div className='featureUserGuideCnt'>
            <Features />
            <UserGuide />
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

