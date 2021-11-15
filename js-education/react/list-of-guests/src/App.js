import React from 'react';
import Forms from './components/Forms/Forms';
import SetTable from './components/SetTable/SetTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { allGuests: [] };
  }

  addGuest = (guest) => {
    guest.isArrive = false;
    guest.id = this.state.allGuests.length;
    const allGuests = this.state.allGuests.concat(guest);
    this.setState({ allGuests });
  }

  guestsWhoCome = (id) => {
    const allGuests = this.state.allGuests;
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
