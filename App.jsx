import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import CardList from './components/CardList'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='container'>
    <Navbar />
    <CardList />
  </div>
)