import React, { useState } from 'react';
import Forms from './components/Forms/Forms'
import SetTable from './components/SetTable/SetTable'

function App() {
  let [guests, setGuest] = useState([])

  const addNewGuest = (guest) => {
    const newGuest = { ...guest, isArrive: false, id: Date.now() }
    setGuest([...guests, newGuest])
  }
  const guestWhoArrive = (id) => () => {
    setGuest(guests.map(item => {
      if (item.id === id) {
        item.isArrive = !item.isArrive
      }
      return item;
    })
    )
  }
  return (
    <div>
      <Forms addNewGuest={addNewGuest} />
      <SetTable guests={guests} guestWhoArrive={guestWhoArrive} />
    </div>
  );
}

export default App;
