import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Samridhi' age={18} />
      <Card user='Sarthak'/>

    </div>
  )
}

export default App
