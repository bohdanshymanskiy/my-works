import React from "react";
import Row from "../Row/Row";
import SetTableCSS from './SetTable.module.css';

class SetTable extends React.Component {
  render() {
    let { allGuests, guestIsCome } = this.props
    allGuests = allGuests.sort((a, b) => (a.isArrive - b.isArrive) || (a.username.localeCompare(b.username)))
    return (
      <div className={allGuests.length > 0 ? null : SetTableCSS.display}>
        <table className={SetTableCSS.table}>
          <tr>
            <th>isArrive</th>
            <th>Username</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {allGuests.map((guest) =>
            <Row guest={guest} guestIsCome={guestIsCome} key={guest.id} />
          )}

        </table>
      </div >
    )
  }

}

export default SetTable;