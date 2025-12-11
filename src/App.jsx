import { useState } from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aman' age={18} img="https://images.pexels.com/photos/2735981/pexels-photo-2735981.jpeg" />
      <Card user='Sarthak' age={20} img="https://images.pexels.com/photos/1583582/pexels-photo-1583582.jpeg"/>
      <Card user='Rohan' age={28} img="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg"/>

    </div>
  )
}

export default App
