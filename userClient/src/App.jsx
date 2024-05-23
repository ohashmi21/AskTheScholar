import { useState } from 'react'
import './App.css'
import Header from './components/nav/header.jsx'
import FullSearchBar from './components/searchbar/fullSearchBar.jsx'

 
function App() {

  return (
    <>
      <div className='mainPage'>
        <Header />
        <FullSearchBar/>
        
      </div>
    </>
  )
}

export default App
