import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} />
      <Card user='Sarthak' age={20}/>
      <Card user='Rohan' age={28}/>

    </div>
  )
}

export default App
