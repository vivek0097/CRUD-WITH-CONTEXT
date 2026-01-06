import React from 'react'
import TravelForm from './components/TravelForm'
import TravelList from './components/TravelList'

const App = () => {
  return (
    <div style={{padding: 20}}>
      <h1>Travel Planner CRUD</h1>
      <TravelForm />
      <TravelList />
    </div>
  )
}

export default App
