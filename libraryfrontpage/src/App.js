import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Features from './components/Features/Features';
import UserGuide from './components/UserGuide/UserGuide';
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
          <div className='ImageCntainer'>

          </div>
        </div>

      </div>
    </>

  )
}

export default App

