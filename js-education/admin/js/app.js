let container = document.getElementById('container')
let submit = document.getElementById('submit')
let table = document.createElement('table')
let inputName = document.getElementById('username');
let select = document.getElementById('workplace');

function setData(data = []) {
  localStorage.setItem('allUsers', JSON.stringify(data))
}
function getData() {
  return JSON.parse(localStorage.getItem('allUsers'))
}
function addEntry() {
  let dataOfUsers = getData();
  if (inputName.value === '' || select.value === 'Work Department') {
    alert('Please fill all forms')
  } else {
    let user = {
      'userName': inputName.value,
      'department': select.value,
      'dateOfCreate': new Date().toUTCString(),
      'editDate': '-'
    };
    dataOfUsers.push(user);
    setData(dataOfUsers)
    setTable()
  }
};

function setTable() {
  let users = getData()

  if (users.length == 0) {
    table.style.display = 'none'
  } else {
    table.innerHTML = `<tr>
    <th>Username</th>
    <th>Department</th>
    <th>Date of Create</th>
    <th>Date of Edit</th>
    <th>Edit</th>
    <th>Delete</th>
    </tr>`

    for (let i = 0; i < users.length; i++) {
      let addRow = document.createElement('tr');
      addRow.id = i;
      addRow.innerHTML = `
      <td id = 'rowName'>${users[i].userName}</td>
    <td id = 'rowDepartment'>${users[i].department}</td>
    <td>${users[i].dateOfCreate}</td>
    <td id='dateOfEdit'>${users[i].editDate}</td>
    <td><button type='button' id='edit'>EDIT</button></td>
    <td><button type='button' id='delete'>Delete</button></td>`
      table.appendChild(addRow);
    }
    container.appendChild(table);
    table.style.display = 'inline-block'
  }

  let editItem = document.querySelectorAll('#edit')
  for (let edit of editItem) {
    edit.onclick = (e) => {
      let el = e.target.parentNode.parentNode.id
      submit.addEventListener('click', editTable, { once: true })
      function editTable() {
        if (inputName.value === '' || select.value === 'Work Department') {
          alert('Please fill all forms')
        } else {
          submit.removeEventListener('click', addEntry)
          users[el].userName = inputName.value;
          users[el].department = select.value;
          users[el].editDate = new Date().toUTCString();
          setData(users)
          setTable()
        }
      }
    }
  }

  let deleteItem = document.querySelectorAll('#delete')
  deleteItem.forEach(item => item.onclick = (e) => {
    let areYouSure = confirm('Are you sure to delete this user info?')
    if (areYouSure) {
      let el = e.target.parentNode.parentNode.id
      users = users.filter(item => item !== users[el])
      setData(users)
      setTable()
    }
  })
}

submit.addEventListener('click', addEntry)
setTable()