import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import {TravelProvider} from '../context/TravelContext'
import TravelForm from '../components/TravelForm'
import TravelList from '../components/TravelList'

test('delete travel from list', () => {
  render(
    <TravelProvider>
      <TravelForm />
      <TravelList />
    </TravelProvider>,
  )

  fireEvent.change(screen.getByPlaceholderText(/destination/i), {
    target: {value: 'Delhi'},
  })

  fireEvent.change(screen.getByRole('textbox', {hidden: true}), {
    target: {value: '2026-02-10'},
  })

  fireEvent.change(screen.getByPlaceholderText(/budget/i), {
    target: {value: '5000'},
  })

  fireEvent.click(screen.getByRole('button', {name: /add/i}))
  fireEvent.click(screen.getByRole('button', {name: /delete/i}))

  expect(screen.queryByText(/delhi/i)).toBeNull()
})
