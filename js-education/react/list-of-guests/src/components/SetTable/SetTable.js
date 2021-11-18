import React from "react";
import Row from "../Row/Row";
import SetTableCSS from './SetTable.module.css';

class SetTable extends React.Component {
  render() {
    const { allGuests, guestIsCome } = this.props
    const sortGuests = allGuests.sort(({ username: aname, isArrive: a }, { username: bname, isArrive: b }) => (a - b) || (aname.localeCompare(bname)))
    return (
      <div className={allGuests.length > 0 ? null : SetTableCSS.display}>
        <table className={SetTableCSS.table}>
          <tr>
            <th>isArrive</th>
            <th>Username</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
          {sortGuests.map((guest) =>
            <Row guest={guest} guestIsCome={guestIsCome} key={guest.id} />
          )}

        </table>
      </div >
    )
  }

}

export default SetTable;