import React from "react";
import Row from '../Row/Row';
import SetTableCSS from './SetTable.module.css'


function SetTable({ guests, guestWhoArrive }) {
  const sortGuests = guests.slice().sort(({ name: aname, isArrive: a }, { name: bname, isArrive: b }) => (a - b) || (aname.localeCompare(bname)));

  return (
    <div className={guests.length > 0 ? SetTableCSS.tableBox : SetTableCSS.display}>
      <table className={SetTableCSS.table}>
        <tr>
          <th>isArrive</th>
          <th>Username</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {sortGuests.map((guest) =>
          <Row guest={guest} key={guest.id} guestWhoArrive={guestWhoArrive} />
        )}
      </table>
    </div >
  );
}

export default SetTable;
