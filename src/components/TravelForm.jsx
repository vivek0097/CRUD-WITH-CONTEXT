import React, {useEffect, useState} from 'react'
import {useTravel} from '../context/TravelContext'

const TravelForm = () => {
  const {addTravel, updateTravel, editingTravel} = useTravel()

  const [form, setForm] = useState({
    destination: '',
    date: '',
    budget: '',
  })

  useEffect(() => {
    if (editingTravel) setForm(editingTravel)
  }, [editingTravel])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (editingTravel) {
      updateTravel(form)
    } else {
      addTravel(form)
    }

    setForm({destination: '', date: '', budget: ''})
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Travel Form</h2>

      <input
        aria-label="destination"
        placeholder="Destination"
        value={form.destination}
        onChange={(e) => setForm({...form, destination: e.target.value})}
        required
      />

      <input
        aria-label="date"
        type="date"
        value={form.date}
        onChange={(e) => setForm({...form, date: e.target.value})}
        required
      />

      <input
        aria-label="budget"
        type="number"
        placeholder="Budget"
        value={form.budget}
        onChange={(e) => setForm({...form, budget: e.target.value})}
        required
      />

      <button type="submit">{editingTravel ? 'Update' : 'Add'}</button>
    </form>
  )
}

export default TravelForm
