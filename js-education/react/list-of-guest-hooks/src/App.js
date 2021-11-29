import React, { useState, useCallback } from 'react';
import Forms from './components/Forms/Forms'
import SetTable from './components/SetTable/SetTable'

function App() {
  let [guests, setGuest] = useState([])

  const addNewGuest = useCallback((guest) => {
    const newGuest = { ...guest, isArrive: false, id: Date.now() }
    setGuest([...guests, newGuest])
  }, [guests])

  const guestWhoArrive = useCallback((id) => {
    setGuest(guests.map(item => {
      if (item.id === id) {
        item.isArrive = !item.isArrive
      }
      return item;
    })
    )
  }, [guests])
  return (
    <div>
      <Forms addNewGuest={addNewGuest} />
      <SetTable guests={guests} guestWhoArrive={guestWhoArrive} />
    </div>
  );
}

export default App;
