import React from 'react';
import Forms from './components/Forms/Forms';
import SetTable from './components/SetTable/SetTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allGuests: [] };
  }

  addGuest = (guest) => {
    const { allGuests } = this.state;
    const newGuest = { ...guest, isArrive: false, id: allGuests.length }
    this.setState({ allGuests: [...allGuests, newGuest] });
  }

  guestsWhoCome = (id) => () => {
    const { allGuests } = this.state;
    this.setState(allGuests.map((item) => {
      if (item.id === id) {
        item.isArrive = !item.isArrive
      }
      return item;
    }));
  }

  render() {
    const { allGuests } = this.state;
    return (
      <div>
        <Forms addGuest={this.addGuest} />
        <SetTable allGuests={allGuests} guestIsCome={this.guestsWhoCome} />
      </div>
    )
  }
}

export default App;
