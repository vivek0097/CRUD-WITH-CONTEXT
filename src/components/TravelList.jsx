import React from 'react'
import {useTravel} from '../context/TravelContext'

const TravelList = () => {
  const {travels, deleteTravel, setEditingTravel, clearAll} = useTravel()

  return (
    <>
      <div>
        <h2>Travel List</h2>

        {travels.length === 0 && <p>No trips added</p>}

        <ul>
          {travels.map((travel) => (
            <li key={travel.id}>
              <b>{travel.destination}</b> | {travel.date} | ₹{travel.budget}
              <button onClick={() => setEditingTravel(travel)}>Edit</button>
              <button onClick={() => deleteTravel(travel.id)}>Delete</button>
            </li>
          ))}
        </ul>

        {travels.length > 0 && <button onClick={clearAll}>Clear All</button>}
      </div>
    </>
  )
}

export default TravelList
