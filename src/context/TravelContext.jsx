import React, {createContext, useContext, useState} from 'react'

const TravelContext = createContext()

export const TravelProvider = ({children}) => {
  const [travels, setTravels] = useState([])
  const [editingTravel, setEditingTravel] = useState(null)

  // ADD
  const addTravel = (travel) => {
    setTravels([...travels, {...travel, id: Date.now()}])
  }

  // UPDATE
  const updateTravel = (updatedTravel) => {
    setTravels(
      travels.map((t) => (t.id === updatedTravel.id ? updatedTravel : t)),
    )
    setEditingTravel(null)
  }

  // DELETE
  const deleteTravel = (id) => {
    setTravels(travels.filter((t) => t.id !== id))
  }

  // CLEAR ALL
  const clearAll = () => {
    setTravels([])
  }

  return (
    <TravelContext.Provider
      value={{
        travels,
        editingTravel,
        setEditingTravel,
        addTravel,
        updateTravel,
        deleteTravel,
        clearAll,
      }}
    >
      {children}
    </TravelContext.Provider>
  )
}

export const useTravel = () => useContext(TravelContext)
