import './App.css'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Display from './components/Display'
import React, { useContext, useRef } from 'react'
import { Playercontext } from './context/Playercontext'

function App() {
  
  const {audioref,track} = useContext(Playercontext);

  return (
    <>
       <div className='h-screen bg-black '>
        <div className='h-[90%] flex'>
           <Sidebar/>
           <Display/>
        </div>
        <Player/>
        <audio ref={audioref} src={track.file} preload='auto'></audio>
       </div>
    </>
  )
}

export default App
